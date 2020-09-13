import React, { useState, useEffect } from 'react';
import Category from './category/category';
import database from '../../database/firebase'

export default function Notescategory(props) {

    const [category, setcategory] = useState({});
    const [categoryKeys, setcategoryKeys] = useState(['Welcome here']);


    useEffect(() => {
        //database read
        database.ref().once('value').then(function (snapshot) {
            const data = snapshot.val()
            const category_array = Object.keys(data)

            setcategory(data)
            setcategoryKeys(category_array)
        });
    }, [])

    const setTempData = (tempdata) => {
        if (tempdata !== '') {
            const tempArray = [...categoryKeys];
            tempArray.push(tempdata)
            setcategoryKeys(
                tempArray
            );

            const temp = {[tempdata]:[]}

            //database insert
            database.ref('h').push(temp).then((x)=>{
                console.log(x)
            })

        }
    }
    return (
        <div className="notescategory1" >
            <Category categoryArr={categoryKeys} categoryData={setTempData} />
        </div>
    );
}
