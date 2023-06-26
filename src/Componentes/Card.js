import React from "react";

const Card=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie">
                <img src={img_path+movie.info.poster_path} alt='imagem' className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average.toFixed(1)}</p>
                    </div>
                    <div className="overview">
                    <p className="release-date">Data de Lançamento: {movie.info.release_date}</p>
                        <h1>Visao Geral</h1>
                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;