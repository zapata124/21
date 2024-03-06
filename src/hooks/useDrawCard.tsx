import { useState, useEffect } from "react";
import { useDeck } from "../providers/DeckProvider";

export type CardTypes = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
};
interface DrawCardTypes {
  deck_id: string;
  success: boolean;
  cards: CardTypes[];
  remaining: number;
}
const useDrawcard = (userType: string) => {
  const { deck_id, updateDeck } = useDeck();
  const [draw, setDraw] = useState<DrawCardTypes>();

  useEffect(() => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
      .then((deck: any) => deck.json())
      .then((deck: any) => {
        setDraw(deck);
        updateDeck(deck.remaining);
      });
  }, [deck_id, userType]);

  return {
    draw,
  };
};

export default useDrawcard;
