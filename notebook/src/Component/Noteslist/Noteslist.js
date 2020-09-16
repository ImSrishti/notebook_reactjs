import React, { useState } from 'react'
import './Noteslist.css'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Notes from './Notes/Notes'
import TextArea from './Notes/TextArea/TextArea'


function Noteslist() {
  //  let {path} = useRouteMatch();
    
    return (
        <Switch>
            <Route path="/" exact children={<Notes />}></Route>
            <Route path="/notescategory/:id" children={<Notes />}></Route>
            <Route path="/textarea/:tempid" children={<TextArea />}></Route>
        </Switch>
    )
}

export default Noteslist