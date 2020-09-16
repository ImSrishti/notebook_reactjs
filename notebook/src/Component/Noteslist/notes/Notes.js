import React, { useState } from 'react'
import './Notes.css'
import {useParams,Link, useRouteMatch} from 'react-router-dom';

import { connect } from "react-redux"; 
import { getNoteList } from "../../../redux/selectors";

let tempid;

function Notes(props) {
    let {id} = useParams();
    tempid =  id ? id : null  ;
    let path = '/textarea/'+tempid
   let { url } = useRouteMatch();
    return ( 
        <div className="notes-flex">
        <div className="notes">
           <Link to={path}>Add note</Link>
           {/* <Link to={`${url}/rendering`}>Rendering with React</Link> */}
        </div>
            { tempid && props.noteList ?
        props.noteList[tempid].map(note => 
            <div key={note} className="notes">{note}</div>
         ) : null}
        
        </div>
    )
}


const mapStateToProps = state => {
    const noteList = getNoteList(state);
    return {noteList};
};

export default connect(
    mapStateToProps,
    null
)(Notes);