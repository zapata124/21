import { Box, Stack } from "@mui/joy";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
function App() {
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
    </Box>
  );
}

export default App;
