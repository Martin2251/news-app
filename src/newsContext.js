import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "14ed157724dc4237a853881764c4e336";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=14ed157724dc4237a853881764c4e336`
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
