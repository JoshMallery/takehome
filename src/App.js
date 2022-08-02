import './App.css';
import React, { useState, useEffect } from 'react';
import ArticleContainer from './ArticleContainer';
import TopSection from './TopSection';
import SingleArticle from './SingleArticle';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState([]);

  const searchArticle = (query) => {
   let searchResults = articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));

    if(searchResults.length === 0){
      searchResults = [{id:0,title:'No Search Results Found!',media:[]}]
    }
    setSearchArticles(searchResults);
    
  }

  const clearSearch = () => {
    setSearchArticles([]);
  }

useEffect(()=>{
  fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ENPdIXAc6HGMh1AdMtzKQcdnGsYAYv0e')
    .then(response => response.json())
    .then(response => setArticles(response.results))
},[])

  return (
    <>
    <TopSection searchArticle={searchArticle} clearSearch={clearSearch}/>
    <Switch>
      <Route exact path="/">
      <div className="App">
      <div className="topHeight">
        
      </div>
    
      <div>
        {articles.length > 0 ? <ArticleContainer articles={searchArticles.length > 0 ? searchArticles : articles}/> : <div>Loading...</div>}
      </div>
      
      </div>
      </Route>
      <Route path="/article/:id" render={({match}) => {

        const matchedArticle = articles.filter(article => article.id === parseInt(match.params.id))[0]
        console.log(matchedArticle)
        return (<SingleArticle {...matchedArticle}/>) 
      }}/>
    </Switch>
    </> 
  );
}

export default App;
