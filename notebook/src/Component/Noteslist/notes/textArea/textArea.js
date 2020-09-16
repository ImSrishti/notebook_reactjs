import React,{useState} from 'react'
import './Textarea.css'
import { addNoteTitle } from '../../../../redux/actions'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';


function TextArea(props) {
    let {tempid} = useParams();

    const [title, settitle] = useState('');
    const [content, setcontent] = useState('')
    const saveContents = () =>{
        debugger
        let tempnote = { "name": tempid, "notelist": title }
        props.addNoteTitle(tempnote)
        
        //{ "name": content, "notelist": [''] }
       
    }
    return (
        <div className="div_area">
            <input className="form__field" placeholder="Write any Title here" 
            onChange={(event)=>{settitle(event.target.value)}}/>
            <button className="button" onClick={saveContents}>Save</button>
            <textarea className="textarea" placeholder="write something"
            onChange={(event)=>{setcontent(event.target.value)}} ></textarea>
            
        </div>
    )
}

export default connect(
    null,
    {addNoteTitle}
)(TextArea);