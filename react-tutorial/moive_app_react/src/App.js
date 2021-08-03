import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';


function App() {
  const [inputs, setInputs] = useState({
    isLoading: true,
    movies: []
  })

  const getMovies = async (inputs) => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies)

    setInputs({
      ...inputs,
      movies,
      isLoading: false
    })
  }

  useEffect(() => {
    getMovies(inputs)

  }, [])

  const { isLoading, movies } = inputs

  return (
    <div>{isLoading ? 'Loading....' : movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      )
    })}

    </div>
  );
}

export default App;