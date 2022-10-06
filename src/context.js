import React from "react";
import axios from "axios";

import { useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [musicArray, setMusicArray] = useState([]);
  const [query, setQuery] = useState("queen");
  const [error, setError] = useState(false);

  const getJSON = async () => {
    setIsLoading(true);
    setError(false);
    const options = {
      method: "GET",
      url: `https://shazam.p.rapidapi.com/search`,
      params: {
        term: query,
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Key": "413491cce6msh6c7c99ac3d7467ep14120ejsnc4a3c79f96a7",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const res = await axios(options);
      const {
        data: { tracks },
      } = res;

      if (!res.data?.tracks) {
        setError(true);
        throw new Error("Sorry i cant find this is song, try again!");
      }

      setMusicArray(tracks.hits);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    getJSON();
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoading, musicArray, query, handleSearch, getJSON, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
