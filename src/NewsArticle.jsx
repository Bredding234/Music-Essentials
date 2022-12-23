import React from "react";

function NewsArticle({ data }) {
  return (   

    <div className="news" style={{color: 'black'}}>
      
      <h1 className="news__title" style={{textAlign: 'center'}}>{data.title}</h1> <br />
        <img src={data.urlToImage}  />
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <a href={data.url}> Read More</a>
    </div>
  );
}

export default NewsArticle;