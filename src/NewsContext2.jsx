import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext2 = createContext();

export const NewsContextProvider2 = (props2) => {
  const [data2, setData2] = useState();
  const apiKey2 = "175ecdd94ca5474b90527666e7db7a3e";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=music-news&from=2022-11-04&pageSize=3&apiKey=${apiKey2}`
      )
      .then((response) => setData2(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (

    <NewsContext2.Provider value={{ data2 }}>

      {props2.children}
    </NewsContext2.Provider>
  );
};