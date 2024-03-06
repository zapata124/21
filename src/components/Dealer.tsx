import { Card, Stack, Typography } from "@mui/joy";
import React, { useEffect } from "react";
import { CardTypes } from "../hooks/useDrawCard";
import { useDeck } from "../providers/DeckProvider";
const Dealer: React.FC = () => {
  const { deck_id, getHand, houseCards } = useDeck();
  useEffect(() => {
    if (deck_id) {
      getHand("house", 2);
    }
  }, [deck_id]);
  return (
    <Stack alignItems={"center"}>
      <Typography level="h4" textColor={"gold"} pb={2}>
        Dealer
      </Typography>
      <Stack direction={"row"}>
        {houseCards && (
          <>
            {houseCards.map((card: CardTypes) => {
              return (
                <Card sx={{ width: "8rem" }} key={`${card.value}-${card.suit}`}>
                  <img src={card.image} alt="game-card" />
                </Card>
              );
            })}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Dealer;
