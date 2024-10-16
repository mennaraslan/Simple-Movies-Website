import React, { createContext, useState, useContext } from 'react';

export const useWatchListContext = () => useContext(WatchListContext);
const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (film) => {
    setWatchList((prevList) => [...prevList, film]);
  }

  const removeFromWatchList = (filmId) => {
    setWatchList((prevList) => prevList.filter(film => film.id !== filmId));
  }

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList, removeFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  )
}

