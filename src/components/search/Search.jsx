import React from 'react';
import "./search.scss";
import search from "../../assets/icon-search.svg"

const Input = () => {
  return (
    <div className='search'>
      <div className='left-side'>
        <img src={search} alt="search"/>
        <input placeholder='Search Github Username...'/>
      </div> 
      <button>Search</button>
    </div>
  )
}

export default Input