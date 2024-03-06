import { Button, Card, Stack, Typography } from "@mui/joy";
import { CardTypes, useDeck } from "../providers/DeckProvider";
import ResultsModal from "./ResultsModal";

const Player: React.FC = () => {
  const { playerCards, drawCard } = useDeck();

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography level="h4" textColor={"gold"} pb={2}>
        Player
      </Typography>
      <Stack direction={"row"}>
        {playerCards && (
          <>
            {playerCards?.map((card: CardTypes) => {
              return (
                <Card sx={{ width: "8rem" }} key={`${card.value}-${card.suit}`}>
                  <img src={card.image} alt="game-card" />
                </Card>
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
