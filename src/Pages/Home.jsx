import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar'
import Leftside from '../Shared/Leftside/Leftside';
import Rightside from '../Shared/Rightsidenavbar/Rightside';
import Breakingnews from './breakingnews/Breakingnews';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard';

const Home = () => {
    const news=useLoaderData();
    
    return (
        <div >
            <Header></Header>
            <Breakingnews></Breakingnews>
             <Navbar></Navbar>
             <h1>This is Home </h1>
             <div className='grid lg:grid-cols-3'>
             <div><Leftside></Leftside></div>
             <div className='col-span-1'>
             {
                news.map(anews=>
                    
                <Newscard  news={anews} ></Newscard>
                )
             }
             </div>
             <div><Rightside></Rightside></div>
             </div>
             
        </div>
    );
};

export default Home;