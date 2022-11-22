import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CharacterCard = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={character.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <FiberManualRecordIcon
            style={{ color: character.status === "Alive" ? "green" : "red" }}
          />
          {`${character.status} - ${character.species}`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Last known location:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.location.name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          First seen in:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.origin.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
