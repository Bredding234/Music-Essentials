import React, { useContext } from "react";
import { NewsContext } from "/src/NewsContext.jsx";
import NewsArticle from "/src/NewsArticle.jsx";

function News2(props) {
  const  {data}  = useContext(NewsContext);
  console.log(data);

  return (
    <div>
<br /> <br /> <br />
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News2;