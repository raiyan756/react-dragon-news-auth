import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
    const{id}=useParams();
    return (
        <div>
            <h1>this is news</h1>
            <p>{id}</p>
        </div>
    );
};

export default News;