import React, { useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import WatchListContext, { useWatchListContext } from '../Contexts/WatchListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  
  const { userData } = useContext(UserContext)

  const { watchList } = useWatchListContext()

  if (!userData) {
    return <div>
    <h1 style={{fontSize: '2.5rem',textAlign:"center", color:"red", marginTop:"100px"}}>404 No Data Available</h1>
  </div>
  }
  console.log(watchList)
  if(watchList.length == 0){
    return <div>
    <h2 style={headingStyle}><FontAwesomeIcon icon={faTv}/>  {userData.username}'s Watchlist : is empty right now :(</h2>
    </div>
  }

  return (
    <>
      {/* <h2 style={headingStyle}><FontAwesomeIcon icon={faUser}/>  Profile</h2>
      <div style={containerStyle}>
        <p style={textStyle}>Username: {userData.username}</p>
        <p style={textStyle}>Password: {userData.password}</p>
      </div> */}
      <h2 style={headingStyle}><FontAwesomeIcon icon={faTv}/>  {userData.username}'s Watchlist :</h2>
      <div style={{marginLeft:"10px"}}>
      {watchList.map(film => (<div style={{
        backgroundColor: "black",
        padding: "15px", 
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.2s",
        width: "200px", 
        margin: "0 10px 20px",
        display: "inline-block",
        textAlign: "center" 
      }}>
        
          <div style={{ cursor: 'pointer', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
            <img src={"https://image.tmdb.org/t/p/w500/" + film.poster_path} style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} alt={film.title} />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '0', fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>{film.title}</h3>
              <p style={{ color: 'yellow', fontWeight: 'bold', margin: '5px 0' }}>{film.vote_average}</p>
            </div>
          </div>
        
      </div>
      ))}
      </div>
    </>
  )
  
}

const containerStyle = {
  flexDirection: 'column',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'black	',
  width: '400px',
  margin: '0 10px',
  padding: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',

}
const headingStyle = {
  fontSize: '2.1rem',
  color: 'white',
  marginBottom: '20px',
  marginLeft:'25px'
}
const textStyle = {
  fontSize: '1.2rem',
  color: 'white',
  padding: '5px 30px',
  borderRadius: '20px',
  marginBottom: '10px',
  marginRight:'20px',
  backgroundColor:'#101010',
  marginLeft:'20px',
  border: '1px solid #303030',

}
export default Profile;
