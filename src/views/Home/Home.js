import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import CharacterCard from "../CharacterCard/CharacterCard";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => setCharacters(data.data.results));
  };

  return (
    <React.Fragment>
      <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
        Rick & Morty
      </Typography>
      {characters.map((character, index) => (
        <CharacterCard character={character} key={index} />
      ))}
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default Home;
