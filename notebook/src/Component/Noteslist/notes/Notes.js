import React from 'react'
import './notes.css'
import {useParams} from 'react-router-dom';
function Notes(props) {
    let {id} = useParams();
    return ( 
        <div className="notes-flex">
        <div className="notes">
            Add Note
        </div>
        <div className="notes">
    {id}{props.noteArr}
        </div>
        </div>
    )
}

export default Notes
