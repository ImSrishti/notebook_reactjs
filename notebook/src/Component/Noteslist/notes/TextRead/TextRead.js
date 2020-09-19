import React, { useState } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import './TextRead.css'
import { connect } from 'react-redux'
import { getNoteList } from "../../../../redux/selectors"

function TextRead(props) {
    
    const [redirect, setRedirect] = useState(false)
    let { tempid2 } = useParams();
    let category;
    const goback = () => {
        setRedirect(true)
    }
    const readContent = () =>{
        for( let a in props.noteList){
        for(let b of props.noteList[a]){
            if(b.title === tempid2){
                category = a;
                return (b.content)
            }
        }
        }
    }
    return (

        <div className="div_area">
            <div >
               {tempid2}
                <button className="button" onClick={goback}>Back</button>
            </div>
            <hr />
            <div>{
            readContent()
            }</div>
            {redirect ? <Redirect to={`/notescategory/${category}`} /> : null}
        </div>

    )
}
const mapStateToProps = state => {
    const noteList = getNoteList(state);
    return { noteList };
};
export default connect(
    mapStateToProps,
    null
)(TextRead);
