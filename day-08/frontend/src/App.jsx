import React, { useState } from "react";
import axios from 'axios';

const api = axios.get('');

const App = () => {
  
  const [notes, setNotes] = useState([]);

  console.log('Hello Integeration...');

  const fetchNotes = () => {
    axios.get()
  }

  return (
    <>
      <div className="notes">
        <div className="note">
          <h1>title</h1>
          <p>description</p>
        </div>
      </div>
    </>
  );
};

export default App;
