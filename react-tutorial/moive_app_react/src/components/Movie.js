import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCompontent = styled.div`
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

    & a {
        display: grid;
        grid-template-columns: minmax(150px, 1fr) 2fr;
        grid-gap: 20px;
        text-decoration: none;
        color: inherit;
    }

    & img {
        position: relative;
        top: -50px;
        max-width: 150px;
        width: 100%;
        margin-right: 30px;
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
`;
const MovieTitle = styled.h3`
    margin: 0;
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
`;

const MovieYear = styled.h3`
    margin: 0;
    font-weight: 300;
    margin-right: 10px;
    font-size: 14px;
`;

const MovieGenres = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;

    & li {
        margin-right: 10px;
        font-size: 14px;
    }
`;

function Movie({ id, year, title, summary, poster, genres }) {
    return (

        <MovieCompontent>
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
                <img
                    src={poster}
                    alt={title}
                    title={title}>
                </img>
                <div className="movie__data">
                    <MovieTitle>{title}</MovieTitle>
                    <MovieYear>{year}</MovieYear>
                    <MovieGenres>
                        {genres.map((genre, idx) => (
                            <li className="genres__genre" key={idx}>
                                {genre}
                            </li>
                        ))}
                    </MovieGenres>
                    <h5 className="movie__summary">{summary}</h5>
                </div>
            </Link>
        </MovieCompontent>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;