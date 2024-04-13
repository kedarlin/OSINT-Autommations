const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 3020;


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'osintika',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());
app.use(express.json());

app.get('/scans', async (req, res) => {
  try {
    let query = 'SELECT * FROM scanned'; // Adjust based on your MySQL schema

    if (req.query.filter && req.query.filter !== 'None') {
      const filter = req.query.filter;
      query += ` WHERE status = '${filter}'`; // Adjust based on your MySQL schema
    }

    // Use the connection pool to execute queries
    pool.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching scans:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.json(results);
    });
  } catch (error) {
    console.error('Error fetching scans:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to handle deletion
app.delete('/scans/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    // Perform deletion query
    const query = 'DELETE FROM scanned WHERE id = ?'; // Adjust based on your MySQL schema

    // Use the connection pool to execute the delete query
    pool.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error deleting scan:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Check if any rows were affected to determine if the deletion was successful
      if (results.affectedRows > 0) {
        res.status(204).send(); // Respond with 204 No Content for successful deletion
      } else {
        res.status(404).json({ error: 'Scan not found' }); // Respond with 404 if the scan ID doesn't exist
      }
    });
  } catch (error) {
    console.error('Error deleting scan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// app.get('/user',async (req,res) =>{
//     
// )};const { exec } = require('child_process');

// ... (rest of your code)

app.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    // Use the connection pool to execute a query to get the data for the specified user id
    pool.query('SELECT data FROM scanned WHERE id = ?', [userId], async (error, results) => {
      if (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      const userData = results;
      console.log(userData);

      // Respond with the data for the specified user id
      res.json(userData);
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (rest of your code)

app.post('/scans', async (req, res) => {
  const { scanName, scanTarget, selectedModules } = req.body;

  try {
    const startTime = new Date();

    // Use the connection pool to insert a new scan
    pool.query(
      'INSERT INTO scanned (id, name, target, started, finished, status, elements, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        null, // MySQL will automatically generate a unique id
        scanName,
        scanTarget,
        startTime,
        '-', // Assuming finished is initially null
        'Running',
        0,
        JSON.stringify({
          "socialMediaAnalyzer": [],
          "darkWebSearch": [],
          "metaDataAnalyzer": [],
          "newsGathering": [], // Initialize with an empty array
        }),
      ],
      async (error, results) => {
        if (error) {
          console.error('Error creating scan:', error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        const scanId = results.insertId;

        // Check if "social media analyzer" is in the selected modules
        const shouldRunSocialMediaAnalyzer = selectedModules.includes('socialMediaAnalyzer');

        if (shouldRunSocialMediaAnalyzer) {
          const username = scanTarget;
          // Run the Python script with the username as an argument
          const pythonCommand = `python blackbird/blackbird.py -u ${username}`;
          
          // Wrap the Python script execution in a promise
          const executePythonScript = () => {
            return new Promise((resolve, reject) => {
              exec(pythonCommand, (pythonError, stdout, stderr) => {
                if (pythonError) {
                  console.error(`Error executing Python script: ${pythonError.message}`);
                  console.error(`Python script stderr: ${stderr}`);
                  reject(pythonError);
                  return;
                }

                console.log(`Python script output: ${stdout}`);
                resolve();
              });
            });
          };

          // Execute Python script and wait for completion
          await executePythonScript();

          // Read the JSON file content
          const jsonFilePath = `blackbird/results/${username}.json`;

          const data = await new Promise((resolve, reject) => {
            fs.readFile(jsonFilePath, 'utf8', (readError, fileData) => {
              if (readError) {
                console.error(`Error reading JSON file: ${readError.message}`);
                reject(readError);
                return;
              }
              resolve(fileData);
            });
          });

          // Parse the JSON content and extract sites and URLs
          const jsonData = JSON.parse(data);
          const sitesWithUrls = jsonData.sites.map(site => ({
            site: site.app,
            url: site.url
          }));

          // Update the row with the extracted data
          pool.query(
            'UPDATE scanned SET data = JSON_SET(data, "$.socialMediaAnalyzer", ?) WHERE id = ?',
            [JSON.stringify(sitesWithUrls), scanId],
            (updateError) => {
              if (updateError) {
                console.error('Error updating scan with module results:', updateError);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
              }

              // Respond with the scanId
              res.status(201).json({ success: true, scanId });
            }
          );
        } else {
          // If "social media analyzer" is not selected, respond with the scanId
          res.status(201).json({ success: true, scanId });
        }
      }
    );

    // Start the scanning process here (you'll need to implement this)

  } catch (error) {
    console.error('Error creating scan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

