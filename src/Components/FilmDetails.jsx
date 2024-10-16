import React from 'react';
import { useState } from 'react';
import { useFilmContext } from '../Contexts/FilmContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useWatchListContext } from '../Contexts/WatchListContext';

function FilmDetails() {
    const { filmData } = useFilmContext()

    const { addToWatchList, removeFromWatchList } = useWatchListContext()

    const [inWatchList, setInWatchList] = useState(true)

    const handleAdd = () => {
        addToWatchList(filmData)
        setInWatchList(false)
    }
    
    const handleRemove = () => {
        removeFromWatchList(filmData.id)
        setInWatchList(true)
    }

    return (
        <div style={container}>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + filmData.poster_path} style={image} alt={filmData.title} />
            </div>
            <div style={details}>
                <h2 style={title}>{filmData.title}</h2>
                <p style={rate}><FontAwesomeIcon icon={faStar} style={{color:'yellow', marginRight:'5px'}} size="1x" />Rating: {filmData.vote_average}</p>
                <p style={date}><FontAwesomeIcon icon={faCalendarAlt} size="1x" style={{marginRight:'8px'}}/>Release Date: {filmData.release_date}</p>
                <div style={trailerText}>{filmData.overview}</div>
                <br></br>
                {inWatchList ? (
                <button onClick = {handleAdd} style={{ background: '#303030', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', width: '30%', boxSizing: 'border-box' }}>
                    <i className = "fa fa-play-circle" style={{fontSize:'15px', marginRight: '5px' }}></i>Add to watchlist
                </button>
            ) : (
                <button onClick = {handleRemove} style={{ background: '#303030', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', width: '30%', boxSizing: 'border-box' }}>
                    <i className = "fa fa-play-circle" style={{ fontSize:'15px', marginRight: '5px' }}></i>Remove from watchlist
                </button>)}
                <br></br>
                <br></br>
                <p style={{fontSize: '12px'}}><FontAwesomeIcon icon={faExclamationCircle} color="red" style={{marginRight:'5px'}}/>Sorry the trailer is not avalible right now!!</p>
            </div>
            
        </div>
    )
}

const container = {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '20px',
    color: 'white',
    backgroundColor: 'black',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    width: '70%',
    marginLeft:'195px',
    border: '2px solid #303030',
    marginTop:'50px',
}

const image = {
    width: '300px',
    height: '450px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginLeft:'30px',
    marginRight:'40px',
    border: '2px solid #303030',

}

const details = {
    marginLeft: '30px',
    
}

const title = {
    fontSize: '40px',
    marginBottom: '10px',
    color: 'red',
    
}

const rate = {
    marginBottom: '5px',
    fontSize: '20px',
    color: 'yellow',
    fontWeight: 'bold'
}
const date = {
    marginBottom: '5px',
    fontSize: '20px',
}

const trailerText = {
    fontSize: '1rem',
    // textAlign: 'center',
    marginTop: '20px',
    width:'75%'
}

export default FilmDetails;