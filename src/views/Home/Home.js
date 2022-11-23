import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import CharacterCard from "../CharacterCard/CharacterCard";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [pagination, setPagination] = useState({
    prev: "",
    next: "",
  });

  useEffect(() => {
    getCharacters();
  }, [url]);

  const getCharacters = () => {
    axios.get(url).then((data) => {
      setCharacters(data.data.results);
      setPagination({
        prev: data.data.info.prev,
        next: data.data.info.next,
      });
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
        Rick & Morty
      </Typography>
      <div className="container text-center">
        <div className="row">
          {characters.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))}
        </div>
      </div>
      {pagination.prev ? (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setUrl(pagination.prev)}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      ) : null}
      {pagination.next ? (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setUrl(pagination.next)}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      ) : null}
    </React.Fragment>
  );
};

export default Home;
