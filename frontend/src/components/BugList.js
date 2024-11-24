import React, { useEffect, useState } from "react";
import axios from "axios";
import './BugList.css';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

    const fetchBugs = async () => {
        const { data } = await axios.get("http://localhost:5000/api/bugs");
        setBugs(data);
    };

    const deleteBug = async (id) => {
        await axios.delete(`http://localhost:5000/api/bugs/${id}`);
        fetchBugs();
    };

    useEffect(() => {
        fetchBugs();
    }, []);

  return (
    <div className="bug-list">
      <h2>Bug List</h2>
      {bugs.length === 0 ? (
        <p>No bugs found.</p>
      ) : (
        <ul>
          {bugs.map((bug) => (
            <li key={bug.id} className="bug-item">
              <div>
                <h3>{bug.title}</h3>
                <p>{bug.description}</p>
                <span className={`priority ${bug.priority.toLowerCase()}`}>
                  {bug.priority}
                </span>
              </div>
              <button onClick={() => deleteBug(bug.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BugList;
