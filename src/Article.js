import './Article.css';
import React from 'react';

const Article = ({title}) => {


    return(
        <div className="article">{title}</div>
    )
}

export default Article;