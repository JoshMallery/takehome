import './Article.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({title, media, id}) => {
    
    return(
        <div className="article">
            <Link to={`/article/${id}`}>
            {media.length > 0 && <img src={media[0]['media-metadata'][1].url}/>}
            <p>{title}</p>
            </Link>
        </div>
    )
    
}

export default Article;