import { Stack, Typography } from "@mui/joy";
import React from "react";
import PlayingCard from "./PlayingCards";

const Player: React.FC = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack direction={"row"}>
        <PlayingCard />
        <PlayingCard />
      </Stack>
      <Typography level="h4" textColor={"gold"} pt={2}>
        Player
      </Typography>
    </Stack>
  );
};

export default Player;
