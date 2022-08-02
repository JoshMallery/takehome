import './Article.css';
import React from 'react';

const Article = ({title, media}) => {
    
    return(
        <div className="article">
            {media.length > 0 && <img src={media[0]['media-metadata'][1].url}/>}
            <p>{title}</p>
        </div>
    )
    
}

export default Article;