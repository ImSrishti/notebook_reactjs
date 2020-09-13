import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import NotesCategory from './Component/NotesCategory/NotesCategory';
import Noteslist from './Component/Noteslist/Noteslist';

function App(props) {
  return (
    <Router>
    <div className="App">
      <div className="header">
         Hello this is me 
      </div>
      <div className="note_body">
         <div className="notestitle"><NotesCategory/></div> 
         <div className="noteslist"> <Noteslist/></div>
      </div>
    </div>
    </Router>
  );
}

export default App;
