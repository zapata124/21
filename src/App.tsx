import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/joy";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import { useDeck } from "./providers/DeckProvider";
import { useEffect } from "react";

function App() {
  const { deck_id, remaining, shuffled, success, handleShuffle, beginGame } =
    useDeck();

  useEffect(() => {
    beginGame();
  }, []);
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      sx={{
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction={"column"} spacing={26}>
        <Dealer />
        <Player />
      </Stack>
      {deck_id && (
        <Stack bgcolor={"white"}>
          <Typography>{deck_id}</Typography>
          <Typography>{remaining}</Typography>
          <Typography>{shuffled.toString()}</Typography>
          <Typography>{success.toString()}</Typography>
        </Stack>
      )}
      <Button onClick={handleShuffle}>Shuffle</Button>
    </Box>
  );
}

export default React.memo(App);
