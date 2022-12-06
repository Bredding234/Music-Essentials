import React, { useContext } from "react";
import { NewsContext2 } from "/src/NewsContext2.jsx";
import NewsArticle2 from "/src/NewsArticle2.jsx";

function News3(props) {
  const  { data2 }  = useContext(NewsContext2);
  console.log(data2);

  return (
    <div>
<br /> <br /> <br />
      <div className="all__news">
        {data2
          ? data2.articles.map((news) => (
              <NewsArticle2 data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News3;