import React, { useState } from 'react';
import "./search.scss";
import search from "../../assets/icon-search.svg"
import axios from 'axios';

const Input = ({data,setData}) => {
  const [inputValue,setInputValue] = useState("");
  const [resultError,setResultError] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  async function fetchData(e) {
    try {
      e.preventDefault()
      const response = await axios(`https://api.github.com/users/${inputValue}`)
      setData(response); 
    } catch (err) {
      setResultError("No results")
    }
    setInputValue("")
  }
  console.log(data);
  return (
    <div className='search'>
        <div className='left-side'>
        <img src={search} alt="search"/>
        <input placeholder='Search Github Username...' value={inputValue} onChange={handleChange}/>
       </div>
       <div className='right-side'>
        <div className='result-error'>{resultError}</div>
      
        <button onClick={fetchData} type="submit">Search</button> 
        </div> 
            
    </div>
  )
}

export default Input