import { Button, Card, Stack, Typography } from "@mui/joy";
import { CardTypes, useDeck } from "../providers/DeckProvider";
import ResultsModal from "./ResultsModal";
import { Grow } from "@mui/material";

const Player: React.FC = () => {
  const { playerCards, drawCard } = useDeck();

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography level="h4" textColor={"gold"} pb={2}>
        Player
      </Typography>
      <Stack
        direction={"row"}
        height={"210px"}
        maxWidth={1500}
        overflow={"auto"}
        sx={{ overflowY: "hidden" }}
      >
        {playerCards && (
          <>
            {playerCards?.map((card: CardTypes) => {
              return (
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  timeout={1000}
                  key={`${card.value}-${card.suit}`}
                >
                  <Card sx={{ width: "8rem" }}>
                    <img src={card.image} alt="game-card" />
                  </Card>
                </Grow>
              );
            })}
          </>
        )}
      </Stack>
      <Stack direction={"row"} spacing={2} mt={2}>
        <ResultsModal />
        <Button onClick={() => drawCard()} sx={{ borderRadius: 100 }}>
          Hit
        </Button>
      </Stack>
    </Stack>
  );
};

export default Player;
