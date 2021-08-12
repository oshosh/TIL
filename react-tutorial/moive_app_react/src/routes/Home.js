import React from 'react';
import styled from 'styled-components';

import Movie from '../components/Movie';
import { connect, shallowEqual, useSelector } from 'react-redux';
import { SEARCH } from '../sotre/actions';

const HomeContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    background: tomato;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
    

    @media screen and (max-width: 1090px) {
    & {
      grid-template-columns: 1fr;
      width: 100%;
      background: tomato;
    }
  }
`;

function Home() {
    const { movies, isLoading } = useSelector(state => ({
        isLoading: state.moviesRedux.isLoading,
        movies: state.moviesRedux.movies
    }), shallowEqual)


    return (
        <HomeContainer>
            {isLoading ? (
                <Loader>
                    <span className='loader__text'>Loading...</span>
                </Loader>
            ) : (
                <Movies className='movies'>
                    {movies.map(movie => {
                        return (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        )
                    })}
                </Movies>
            )}
        </HomeContainer>
    );
}
const mapStateToProps = state => {
    return {
        movies: state.moviesRedux.movies,
        isLoading: state.moviesRedux.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return dispatch({ type: SEARCH });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);