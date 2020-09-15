import React, { useState } from 'react'
import './Noteslist.css'
import { Switch, Route } from "react-router-dom";
import Notes from './Notes/Notes'
import TextArea from './Notes/TextArea/TextArea'


function Noteslist() {

   // const [notes, setnotes] = useState(['Welcome here on notes']);

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
            <Route path="/" exact children={<Notes />}></Route>
            <Route path="/notescategory/:id" children={<Notes />}></Route>
            <Route path="/textarea" children={<TextArea />}></Route>
        </Switch>
    )
}

export default Noteslist