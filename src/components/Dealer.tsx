import { Stack, Typography } from "@mui/joy";
import React from "react";
import PlayingCard from "./PlayingCards";

const Dealer: React.FC = () => {
  return (
    <Stack alignItems={"center"}>
      <Typography level="h4" textColor={"gold"} pb={2}>
        Dealer
      </Typography>
      <Stack direction={"row"}>
        <PlayingCard />
        <PlayingCard />
      </Stack>
    </Stack>
  );
};

export default Dealer;
