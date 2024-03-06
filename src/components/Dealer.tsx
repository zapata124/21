import React from "react";
import { Card, Stack, Typography } from "@mui/joy";
import { CardTypes, useDeck } from "../providers/DeckProvider";
import { Grow } from "@mui/material";

const DealerCards = ({ dealerCards }) => {
  return (
    <Stack alignItems={"center"}>
      <Stack direction={"row"} height={"210px"}>
        {dealerCards && (
          <>
            {dealerCards.map((card: CardTypes) => {
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
