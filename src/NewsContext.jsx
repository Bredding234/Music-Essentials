import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "175ecdd94ca5474b90527666e7db7a3e";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=music-news&from=2022-12-14&pageSize=20&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (

    <NewsContext.Provider value={{ data }}>

      {props.children}
    </NewsContext.Provider>
  );
};