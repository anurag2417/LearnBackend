import React, { useState, useEffect } from "react";
import axios from 'axios';

const api = axios.get('');

const App = () => {

  const [notes, setNotes] = useState([]);

  console.log("Hello Integration")

  const fetchNotes = () => {
    axios.get('https://learnbackend-xmau.onrender.com/notes')
      .then((res) => {
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNotes()
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const { title, description } = e.target.elements

    console.log(title.value, description.value);

    axios.post('https://learnbackend-xmau.onrender.com/notes', {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        console.log(res.data)

        fetchNotes()
      })
  }

  const deleteHandler = (noteId) => {
    axios.delete("https://learnbackend-xmau.onrender.com/notes/"+noteId)
      .then(() => {
        fetchNotes()
      })
  }

  return (
    <>

      <form className='note-create-form' onSubmit={submitHandler}>
        <label htmlFor="title">Title: </label>
        <input name="title" type="text" placeholder="Enter title" required />
        <br />
        <label htmlFor="description">Description: </label>
        <input name="description" type="text" placeholder="Enter description" required />
        <br />
        <button>Create Note</button>
      </form>
      <div className="notes"> 
        {
          notes.map((note, idx) => {
            return <div key={idx} className="card">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{deleteHandler(note._id)}} className="deleteButton">Delete</button>
            </div>
          })
        }
      </div>
    </>
  );
};

export default App;
