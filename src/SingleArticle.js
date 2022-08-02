import React from 'react';
import './SingleArticle.css';

const SingleArticle = ({title,abstract,published_date,media,url}) => {


    return(
        <div>
            {media.length > 0 && <img src={media[0]['media-metadata'][2].url}/>}
            <p>{title}</p>
            <p>{abstract}</p>
            <p>Date Published: {published_date}</p>
            <a href={url}> Full article on NYT</a>
        </div>
    )
}

export default SingleArticle