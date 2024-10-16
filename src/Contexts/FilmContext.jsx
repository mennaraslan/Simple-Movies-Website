import React, { createContext, useContext, useState } from 'react';

const FilmContext = createContext()
export const useFilmContext = () => useContext(FilmContext)

export const FilmProvider = ({ children }) => {

    const [filmData, setFilmData] = useState(null)

    return (
        <FilmContext.Provider value={{ filmData, setFilmData }}>
            {children}
        </FilmContext.Provider>
    )
}

export default FilmContext;