import React, { useState } from 'react'
import './notes.css'
import {useParams,Link} from 'react-router-dom';

let count =4;
function Notes(props) {
    const [notes, setnotes] = useState(
         {
            0:['first note','second note','third note'],
            1:['first note','halwa note'],
            2:['pehla','nasha','pehla','khumar'],
            3:['nya','pyar','hai','nya','intezar'],
            [count]:[''],
            
        }
    )
    let {id} = useParams();
    let temp = Number(id) ? Number(id) : 0;
    return ( 
        <div className="notes-flex">
        <div className="notes">
           <Link to="/textarea" >Add note</Link>
        </div>
          { 
        notes[temp].map(note => 
            <div className="notes">{note}</div>
         ) }
        
        </div>
    )
}

export default Notes