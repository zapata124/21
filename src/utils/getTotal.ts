import { CardTypes } from "../providers/DeckProvider";

export const getTotal = (cards: CardTypes[]) => {
    let withACE = false;
    let count = 0;
    for (const card of cards) {
      const value = Number(card.value);
      Number.isNaN(value) ? (withACE = true) : (count += value);
    }
    if (withACE) {
      const aceAsOne = count + 1;
      const aceAsEleven = count + 11;
      if (aceAsEleven > 21) {
        return aceAsOne;
      }
      return aceAsOne >= aceAsEleven ? aceAsOne : aceAsEleven;
    }
    return count;
  };