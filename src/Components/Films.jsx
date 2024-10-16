import axios from "axios";
import React, { useEffect, useState } from "react";
import Film from "./Film";
import Login from "./Login";
import Search from "./Search";

const Films = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const retrieveFilms = async() => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        setFilms(response.data.results)
      } 
      catch (error) {
        console.error("Error!!!!!!!!!!")
      }
    }

    retrieveFilms()
  }, [])

  const [searchBy, setSearchBy] = useState('')

  const handleSearch = (movie_name) => {
    setSearchBy(movie_name)
  }

  let filtered_movies = films.filter(m => m.title.toLowerCase().startsWith(searchBy.toLowerCase()))


  return (
    <div style={{marginLeft:"10px"}}>
      <Search onSearch = {handleSearch} />
      {filtered_movies.map((film) => (<Film key={film.id} {...film} />))}
    </div>
  )
}


export default Films;
