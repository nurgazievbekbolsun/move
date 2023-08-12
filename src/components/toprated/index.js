import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../API_KEY'
import MovieKard from '../MovieKard'

const Toprated = () => {
  const [rated,setRated] = useState([])
  const getRated = (key) =>{
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
    .then(res => setRated(res.data.results))
  }
  useEffect(() =>{
     getRated(API_KEY)
  },[])
  console.log("rated",rated);
  return (
   <div className="container">
     <div style={{display:'flex' ,flexWrap:'wrap' ,gap:'6px',padding:'20px 0 0 0' }}>
      {rated.slice(0,8).map(el => <MovieKard el={el}/>)}
    </div>
   </div>
  )
}

export default Toprated
