import React,{useState} from 'react'
import './noteslist.css'
import {Switch,Route} from "react-router-dom";
import Notes from './notes/Notes'
function Noteslist() {
    const [notes, setnotes] = useState(['Welcome here on notes']);
   
    // const setTempData = (tempdata)=>{
    //     if(notes !== ''){
    //     const tempArray = [...notes];
    //     tempArray.push(tempdata)
    //     setnotes(
    //         tempArray
    //       );
    //     }
    // }
    return (
        <Switch>
        <Route path="/notescategory/:id" children={<Notes />}></Route>
         </Switch>
    )
}

export default Noteslist
