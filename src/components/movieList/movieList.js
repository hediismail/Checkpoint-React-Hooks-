import React from 'react'
import MovieCard from "../movieCard/movieCard";
import "./movieList.css";
function movieList({list,search,rate}) {
    return (
        <div className="movielist">          
            {list.filter(movies=>movies.title.toLowerCase().includes(search.toLowerCase())).filter(movies=>movies.rate>=rate).map((el, i) => (
              <MovieCard key={i} item={el} />
            ))}           
        </div>
    )
}

export default movieList;
