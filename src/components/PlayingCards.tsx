import React from "react";
import { Card } from "@mui/joy";
import Club from "../assets/clubs_2.svg";
interface PlayingCardProp {
  children?: React.ReactNode;
}
const PlayingCard: React.FC<PlayingCardProp> = ({ children }) => {
  return <Card sx={{ width: "8rem" }}>{children}</Card>;
};

export default PlayingCard;
