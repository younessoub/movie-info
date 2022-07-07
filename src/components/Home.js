import React, { useState, useEffect } from "react";
//components
import HeroImage from "./HeroImage";
import Search from "./Search";
import Movies from "./Movies";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import More from "./More";

//API
import API from "../API";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [more, setMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      //console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //fetch with search term
  useEffect(() => {
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //initial fetch
  useEffect(() => {
    fetchMovies(1);
  }, []);

  //load More movies
  useEffect(() => {
    if (!more) return;

    fetchMovies(state.page + 1, searchTerm);
    setMore(false);
  }, [more, searchTerm, state.page]);

  if (error) {
    return <h1 style={{ color: "red" }}>Something Went Wrong</h1>;
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Search setSearchTerm={setSearchTerm} />
      {loading && <Spinner />}

      <Movies header={searchTerm ? searchTerm : "Popular Movies"}>
        {state.results.map((movie) => {
          return (
            <Thumb
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              vote={movie.vote_average}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          );
        })}
      </Movies>
      {more && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <More
          clicked={() => {
            setMore(true);
          }}
        />
      )}
    </>
  );
};

export default Home;
