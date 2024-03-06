import { Button, Card, Stack, Typography } from "@mui/joy";

import { useDeck } from "../providers/DeckProvider";
import { CardTypes } from "../hooks/useDrawCard";
import { useEffect } from "react";

const Player: React.FC = () => {
  const { deck_id, getHand, playerCards, drawCard } = useDeck();

  useEffect(() => {
    if (deck_id) {
      getHand("player", 2);
    }
  }, [deck_id]);

  console.log({ playerCards });
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
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
      <Button onClick={() => drawCard()}>Hit</Button>
      <Typography level="h4" textColor={"gold"} pt={2}>
        Player
      </Typography>
    </Stack>
  );
};

export default Player;
