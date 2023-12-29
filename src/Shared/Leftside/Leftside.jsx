import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1>this is left:{categories.length}</h1>
           {
            categories.map(category=><Link className='block ml-4 ' key={category.id}>{category.name}</Link>)
           }
        </div>
    );
};

export default Leftside;