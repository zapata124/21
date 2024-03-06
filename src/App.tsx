import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/joy";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import { useDeck } from "./providers/DeckProvider";
import ResultsModal from "./components/ResultsModal";

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
      <Button onClick={() => playAgain()}>New Game</Button>
      <ResultsModal />
    </Box>
  );
}

export default App;
