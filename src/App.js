import './App.css';
import React, { useState, useEffect } from 'react';
import ArticleContainer from './ArticleContainer';
import TopSection from './TopSection';

const App = () => {

  const [articles, setArticles] = useState([])

useEffect(()=>{
  fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ENPdIXAc6HGMh1AdMtzKQcdnGsYAYv0e')
    .then(response => response.json())
    .then(response => setArticles(response.results))
},[])

  return (
    <div className="App">
      <TopSection />
      <div >
        <ArticleContainer className="container" articles={articles}/>  
      </div>
      
    </div>
  );
}

export default App;
