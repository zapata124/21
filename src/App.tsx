import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/joy";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import { useDeck } from "./providers/DeckProvider";

function App() {
  const { deck_id, beginGame, setHands, playAgain } = useDeck();

  useEffect(() => {
    beginGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (deck_id) {
      setHands();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck_id]);
  return (
    <Box
      width={"100vw"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Stack direction={"column"} spacing={20}>
          <Dealer />
          <Player />
        </Stack>
        <Button
          onClick={() => playAgain()}
          sx={{
            display: "absolute",
            left: 420,
            bottom: 410,
            borderRadius: 100,
          }}
        >
          New Game
        </Button>
      </Box>
    </Box>
  );
}

export default App;
