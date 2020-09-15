import React, { useState, useEffect } from 'react';

import database from '../../database/firebase'

import { addNote,initialize } from '../../redux/actions'
import { connect } from "react-redux";
import { getNoteCategoryList } from "../../redux/selectors";
import { Link } from 'react-router-dom';

function NotesCategory(props) {

    const [categoryInput, setcategoryInput] = useState('');

    useEffect(() => {
        //database read
        database.ref('notebook').once('value').then(function (snapshot) {
            const data = snapshot.val()
            props.initialize(data)
        });
    },[])

    // const setTempData = async (tempdata) => {
    //     if (tempdata !== '') {
    //         const tempArray = [...categorykeys];
    //         tempArray.push(tempdata)
    //         setcategoryKeys(
    //             tempArray
    //         );

    //         const temp = { "name": tempdata }

    //         //database insert
    //         database.ref('notebook').push(temp)
    //     }
    // }
    
    return (
        <div>
            <div>
                <input value={categoryInput} onChange={e=>setcategoryInput(e.target.value)}/>
                <button onClick={e=>props.addNote(categoryInput)}>Add</button>
            </div>
            <ul>
                { props.noteCategoryList.map((x,i) =>(
                <li key={i}>
                    <Link to={'/'+ x}> {x}</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    const noteCategoryList = getNoteCategoryList(state);
    return {noteCategoryList};
};

export default connect(
    mapStateToProps,
    { addNote,initialize }
)(NotesCategory);