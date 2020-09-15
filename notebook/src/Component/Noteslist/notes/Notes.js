import React, { useState } from 'react'
import './Notes.css'
import {useParams,Link} from 'react-router-dom';

import { connect } from "react-redux";
import { getNoteList } from "../../../redux/selectors";



function Notes(props) {
    const [notes, setnotes] = useState('')
    let {id} = useParams();
    let temp = Number(id) ? Number(id) : 0;
    return ( 
        <div className="notes-flex">
        <div className="notes">
           <Link to="/textarea" >Add note</Link>
        </div>
          { 
        props.noteList.map(note => 
            <div key={note} className="notes">{note}</div>
         ) }
        
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