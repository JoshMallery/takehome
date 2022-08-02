import './ArticleContainer.css';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const TopSection = ({searchArticle, clearSearch}) => {


    return(
        <div className="topSection">

        <Route exact path="/" render={()=>{

                return(
                <input 
                type='search'
                placeholder="Search Articles"
                onChange={(event)=> searchArticle(event.target.value)}
                />)

        }}/>
           


            <NavLink exact to="/" className="navButton" onClick={()=> clearSearch()}>
                <button>Home</button>
            </NavLink>
            

        </div>
    )
}

export default TopSection;