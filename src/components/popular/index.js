import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../API_KEY'
import MovieKard from '../MovieKard'

const Popular = () => {
  const [pop,setPop] = useState([])
  const getPop = (key) => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    .then(res => setPop(res.data.results))
  } 
  useEffect(() =>{
    getPop(API_KEY)
  },[])
  console.log("pop",pop);
  return (
   <div className="container">
     <div style={{display:'flex',flexWrap:'wrap',gap:'6px',padding:'20px 0 0 0'}}>
      {
        pop.slice(0,8).map((el) => <MovieKard pop={pop} el={el}/>)
      }
    </div>
   </div>
  )
}

export default Popular
