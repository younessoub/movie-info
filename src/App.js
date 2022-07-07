import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";

//styles
import { GlobalStyle } from "./GlobalStyle.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
