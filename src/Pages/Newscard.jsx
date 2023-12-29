import React from 'react';
import { Link } from 'react-router-dom';

const Newscard = ({news}) => {
    const{title,thumbnail_url,details,_id}=news;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={thumbnail_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      {
        details.length>200 ?<p>{details.slice(0,200)}<Link to={`/news/${_id}`}>   Read More</Link></p>
        :
        <p>{details}</p>
      }
    </div>
  </div>
</div>
    );
};

export default Newscard;