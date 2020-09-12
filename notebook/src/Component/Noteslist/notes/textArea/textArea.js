import React,{useState} from 'react'
import './textarea.css'
function TextArea() {
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('')
    const saveContents = () =>{
        
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

export default TextArea
