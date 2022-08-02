import './ArticleContainer.css';
import React from 'react';
import Article from './Article';

const ArticleContainer = ({articles}) => {

    const allArticles = articles.map(article =>{

        return(
            <div key={article.id}>
                <Article {...article} />
            </div>
        )
    })

    return(
        <div className="container">{allArticles}</div>
    )
}

export default ArticleContainer;