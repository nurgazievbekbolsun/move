import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const MovieKard = ({el,pop}) => {

  return (
    <div style={{border:'2px solid red',
    height:'auto',
    }}>
        <Link to={"/"}>
        <img style={{display:'inline'}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="" />
        </Link>
         <p  style={{width:'90%'}}>{el.title}</p>
    </div>
  )
}

export default MovieKard
