import React from 'react'
import './Notes.css'
import {useParams,Link} from 'react-router-dom';

import { connect } from "react-redux"; 
import { getNoteList } from "../../../redux/selectors";

let tempid;

function Notes(props) {
    let {id} = useParams();
    tempid =  id ? id : null  ;
    let path = '/textarea/'+tempid
    // let path2 =  '/textread/'+tempid
  
    return ( 
        <div className="notes-flex">
        {tempid &&props.noteList? <div className="notes"><Link to={path}>Add note</Link></div> :null}
        
            { tempid && props.noteList ?
        props.noteList[tempid].map(note => 
            <div key={note} className="notes"><Link to={`/textread/${note.title}`}>{note.title}</Link></div>
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