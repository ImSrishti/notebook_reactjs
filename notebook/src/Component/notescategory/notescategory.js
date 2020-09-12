import React, { useState } from 'react';
import Category from './category/category';
export default function Notescategory(props) {
    const [category, setcategory] = useState(['Welcome here']);
 
    const setTempData = (tempdata)=>{
        if(tempdata !== ''){
        const tempArray = [...category];
        tempArray.push(tempdata)
        setcategory(
            tempArray
          );
        }
    }
    return (
        <div className="notescategory1" >    
            <Category categoryArr={category} categoryData={setTempData}/>
        </div>
    );
    }
    