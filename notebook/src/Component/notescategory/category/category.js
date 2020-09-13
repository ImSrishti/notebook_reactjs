import React, { useState } from 'react'
import './category.css'
import {Link} from "react-router-dom";

export default function Category(props) {
    const [temptopic, settemptopic] = useState('')

    const changeTempTopic = () => {
        props.categoryData(temptopic)
    }
   
    return (
        <div>
            <div className="addtopic">
                <input className="inputBox" onChange={(event) => { settemptopic(event.target.value ) }} />
                <div className="addtopicButton" onClick={changeTempTopic}>Add Topic </div>
            </div>
          
            {props.categoryArr.map(
                (topic, index) =>
                    <div key={index} className="topic">
                 <Link to={"/notescategory/"+index}> {topic} </Link>
                    </div>
             ) }
            

        </div>
    )
}
