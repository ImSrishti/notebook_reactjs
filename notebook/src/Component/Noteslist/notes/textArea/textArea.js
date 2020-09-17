import React, { useState } from 'react'
import './Textarea.css'
import { addNoteTitle } from '../../../../redux/actions'
import { connect } from "react-redux";
import { useParams, Redirect} from 'react-router-dom';


function TextArea(props) {
    let { tempid } = useParams();

    const [title, settitle] = useState('');
    const [content, setcontent] = useState('')

    const [redirect, setRedirect] = useState(false)
    
    const saveContents = () => {

        let tempnote = { "id": tempid, "note": {"title":title,"content":content} }
        props.addNoteTitle(tempnote);

        setRedirect(true)

    }
    return (
        <div className="div_area">
            <input className="form__field" placeholder="Write any Title here"
                onChange={(event) => { settitle(event.target.value) }} />
            <button className="button" onClick={saveContents}>Save</button>
            <textarea className="textarea" placeholder="write something"
                onChange={(event) => { setcontent(event.target.value) }} >
            </textarea>
            {redirect?<Redirect to={`/notescategory/${tempid}`} />:null}
        </div>
    )
}

export default connect(
    null,
    { addNoteTitle }
)(TextArea);