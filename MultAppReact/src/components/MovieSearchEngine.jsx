import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #333;
    text-align: center;
`

const MoviesContainer = styled.div`
    color: #555;
    border-radius: 18px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
`

const MovieCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

function MovieSearchEngine() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=6eb1aef1`)
            setMovies(response.data.Search)
        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <Container>
            <Title>Movie Search Engine</Title>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for a movie" />
            <button onClick={searchMovies}>Search</button>
            <MoviesContainer>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </MovieCard>
                ))}
            </MoviesContainer>
        </Container>
    )
}

export default MovieSearchEngine

// trocar para a api do tmdb