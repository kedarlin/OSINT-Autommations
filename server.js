const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this line

const app = express();
const port = 3010;

app.use(express.json());
app.use(cors()); // Add this line to enable CORS

app.get('/', async (req, res) => {
  try {
    // Make a GET request to the Python script
    const pythonResponse = await axios.post('http://localhost:5000/summarize', {
      api_key: '2e03d90de2ff4bf2bae23d0d1c8ee1ec',  // Pass your News API key
    });

    // Extract the summarized data from the Python response
    const summarizedData = pythonResponse.data;

    // Send the summarized data as the JSON response
    res.json(summarizedData);
  } catch (error) {
    console.error('Error fetching data from Python script:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
