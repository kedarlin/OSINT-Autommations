import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./Scanned.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFilter,
  faRedo,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Scanned = () => {
  const [scans, setScans] = useState([]);
  const [filter, setFilter] = useState("None");
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const apiUrl =
        filter !== "None"
          ? `http://localhost:3020/scans?filter=${filter}`
          : "http://localhost:3020/scans";
      const response = await fetch(apiUrl);
      const data = await response.json();
      const formattedData = data.map((scan) => ({
        ...scan,
        started: formatDateTime(scan.started),
        finished: formatDateTime(scan.finished),
      }));
      setScans(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter]);
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  const handleRefresh = () => {
    fetchData();
  };

  const handleDownload = () => {};

  const handleActionDelete = async (id) => {
    try {
      console.log(id);
      setScans(scans.filter((scan) => scan.id !== id));
      fetch(`http://localhost:3020/scans/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      toast.error("Error deleting scan:", error);
    }
  };

  const handleActionRerun = () => {};

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const ISTDateTime = new Date(dateTime.getTime());
    const ISTDate = ISTDateTime.toLocaleDateString();
    const hours = ISTDateTime.getHours().toString().padStart(2, "0");
    const minutes = ISTDateTime.getMinutes().toString().padStart(2, "0");
    const seconds = ISTDateTime.getSeconds().toString().padStart(2, "0");
    return `${ISTDate} ${hours}:${minutes}:${seconds}`;
  };

  const redirectToDashboard = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="scanned">
      <Header />
      <Sidebar />
      <ToastContainer />
      <div className="scanned-container">
        <div className="scanned-title">Scans</div>
        <div className="filter-container">
          <div className="scanned-filter">
            <FontAwesomeIcon icon={faFilter} style={{ marginRight: "5px" }} />
            <label>Filter : </label>
            <select
              name="filter"
              className="filter-options"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="None"> None </option>
              <option value="Running"> Running </option>
              <option value="Finished"> Finished </option>
              <option value="Aborted"> Aborted </option>
            </select>
          </div>
          <div className="scanned-other-oper">
            <div className="refresh" onClick={handleRefresh}>
              <FontAwesomeIcon
                icon={faRefresh}
                className="refreshi"
                alt="refresh-icon"
                style={{ color: "white" }}
              />
            </div>
            <div className="download" onClick={handleDownload}>
              <FontAwesomeIcon
                icon={faDownload}
                className="downloadi"
                alt="download-icon"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>

        <table className="results">
          <thead>
            <tr>
              <th>Name</th>
              <th>Target</th>
              <th>Started</th>
              <th>Finished</th>
              <th>Status</th>
              <th>Elements</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {scans.map((scan) => (
              <tr key={scan.id}>
                <td
                  className="table-name"
                  onClick={() => redirectToDashboard(scan.id)}
                >
                  {scan.name}
                </td>
                <td>{scan.target}</td>
                <td>{scan.started.toLocaleString()}</td>
                <td>{scan.finished.toLocaleString()}</td>
                <td>{scan.status}</td>
                <td>{scan.elements}</td>
                <td>
                  <div className="action-icons">
                    <div
                      className="action-delete"
                      onClick={() => handleActionDelete(scan.id)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="action1"
                        alt="action1"
                      />
                    </div>

                    <div className="action-rerun" onClick={handleActionRerun}>
                      <FontAwesomeIcon
                        icon={faRedo}
                        className="action2"
                        alt="action2"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scanned;
