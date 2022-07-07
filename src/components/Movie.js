import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API";
import Spinner from "./Spinner";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) =>
    props.backdrop ? `url(${props.backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 20px;
  p {
    font-size: var(--fontMed);
  }
  @media screen and (max-width: 800px) {
    p {
      font-size: var(--fontSmall);
    }
  }
`;

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: var(--maxWidth);
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  img {
    width: 100%;
    border-radius: 20px;
  }
  .info {
    padding: 20px;

    /*border: 1px solid red;*/
  }
  .moreInfo {
    display: flex;
    justify-content: space-between;
  }
  .ratingWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rating {
    background: white;
    color: black;
    margin-top: 0;
    font-weight: bold;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Movie = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    let isMounted = true;
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        if (isMounted) {
          setMovieDetails({ ...movie, directors });
        }

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie(movieId);
    return () => {
      isMounted = false;
    };
  }, [movieId]);

  if (error) {
    return <h1 style={{ color: "red" }}>Somthing Went Wrong</h1>;
  }

  return (
    <>
      {loading && <Spinner />}
      {movieDetails && (
        <Wrapper
          backdrop={IMAGE_BASE_URL + BACKDROP_SIZE + movieDetails.backdrop_path}
        >
          <Content>
            <img
              src={IMAGE_BASE_URL + BACKDROP_SIZE + movieDetails.poster_path}
              alt="poster"
            />
            <div className="info">
              <h1>{movieDetails.title}</h1>
              <p>{movieDetails.overview}</p>
              <br />

              <p>{movieDetails.runtime} mins</p>
              <br />
              <div className="moreInfo">
                <div className="ratingWrapper">
                  <p>Rating:</p>
                  <p className="rating">{movieDetails.vote_average}</p>
                </div>
                <div className="DirectorWrapper">
                  <p>Directed by:</p>

                  {movieDetails.directors.map((director) => (
                    <p key={director.credit_id}>{director.name}</p>
                  ))}
                </div>
                <div className="dateWrapper">
                  <p style={{ color: "" }}>Release date:</p>

                  <p className="date">{movieDetails.release_date}</p>
                </div>
              </div>
            </div>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default Movie;
