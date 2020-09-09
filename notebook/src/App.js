import React from 'react';
import './App.css';
import Notestitle from './Component/Notestitle/Notestitle';
import Noteslist from './Component/Noteslist/Noteslist';
function App() {
  return (
    <div className="App">
      <div className="header">
         Hello this is me 
      </div>
      <div className="note_body">
         <div className="notestitle"><Notestitle/></div> 
         <div className="noteslist"> <Noteslist/></div>
      </div>
    </div>
  );
}

export default App;
