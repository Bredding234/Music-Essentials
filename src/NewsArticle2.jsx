import React, { useEffect, useState} from "react";

function NewsArticle2({ data }) {
   const count = [1,2, 3];
  return (   

    <div className="news">
      
        <h1  className="news__title" style={{textAlign: 'center'}} > News Article </h1> 
  <br /> 
   <img src={data.urlToImage}  />
      <a href='/News'> Read More</a>
    </div>
    
  );
}

export default NewsArticle2;