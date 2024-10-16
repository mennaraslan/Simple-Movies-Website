import React, { useState } from "react";
import { PureComponent } from "react";
import { useNavigate } from 'react-router-dom';
import { useFilmContext } from "../Contexts/FilmContext";

function Film(props) {
    const [showTrailer, setShowTrailer] = useState(true)

    const handleTrailerClick = () => {
        setShowTrailer(false)
    }

    const { setFilmData } = useFilmContext()

    const navigate = useNavigate()

    const handleDivClick = () => {
        setFilmData(props)
        navigate('filmdetails', {state: { ...props }})
      }
    return (
        <div style={{
            backgroundColor: "black",
            padding: "15px", 
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            width: "200px", 
            margin: "0 10px 20px",
            display: "inline-block",
            textAlign: "center" 
        }}>
            <div onClick = { handleDivClick } style={{ cursor: 'pointer', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.poster_path} style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} />
            </div>
            <div style={{ padding: '10px' }}>
                <h3 style={{ margin: '0', fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>{props.title}</h3>
                <p style={{ color: 'yellow', fontWeight: 'bold', margin: '5px 0' }}>{props.vote_average}</p>
                <p style={{ color: 'white', margin: '5px 0' }}>{props.release_date}</p>
            </div>

            {showTrailer ? (
                <button onClick = {handleTrailerClick} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }}>
                    <i className = "fa fa-play-circle" style={{ marginRight: '5px' }}></i> Watch Trailer
                </button>
            ) : (
                <div style={{ color: 'white', fontSize: '0.8rem', textAlign: 'center' }}>Trailer Not Available</div>
            )}
        </div>
    )
}


export default Film;
