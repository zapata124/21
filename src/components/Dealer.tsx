import React from "react";
import { Card, Stack, Typography } from "@mui/joy";
import { CardTypes, useDeck } from "../providers/DeckProvider";

const DealerCards = ({ dealerCards }) => {
  return (
    <Stack alignItems={"center"}>
      <Stack direction={"row"}>
        {dealerCards && (
          <>
            {dealerCards.map((card: CardTypes) => {
              return (
                <Card sx={{ width: "8rem" }} key={`${card.value}-${card.suit}`}>
                  <img src={card.image} alt="game-card" />
                </Card>
              );
            })}
          </>
        )}
      </Stack>
      <Typography level="h4" textColor={"gold"} pt={2}>
        Dealer
      </Typography>
    </Stack>
  );
};

const MemoDealerCards = React.memo(DealerCards);

const Dealer: React.FC = () => {
  const { dealerCards } = useDeck();

  return <MemoDealerCards dealerCards={dealerCards} />;
};

export default Dealer;
