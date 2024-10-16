import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = ({onSearch}) => {

  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom:'20px'}}>
      <div style={{ position: 'relative', width: '500px' }}>
        <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#606060'}}/>
        <input style = {istyle} type="text" onChange={handleChange} placeholder="  Search for a Movie"
        />
      </div>
    </div>
    </>
  )
}

const istyle = {
  width: '100%',
  padding: '10px 10px 10px 40px',
  borderRadius: '20px',
  border: '1px solid #303030',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '17px'
}
export default Search;
