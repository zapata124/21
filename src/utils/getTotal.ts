import { CardTypes } from "../providers/DeckProvider";

export const getTotal = (cards: CardTypes[]) => {
    const mapFaceValues = {
      "KING": 10,
      "QUEEN": 10,
      "JACK": 10
    }

    let withACE = false;
    let count = 0;

    for (const card of cards) {
      if (mapFaceValues[card.value]) {
        count += mapFaceValues[card.value];
        continue
      }

      const value = Number(card.value);

      // when function return true we have an ace 
      Number.isNaN(value) ? (withACE = true) : (count += value);
    }

    // determined the optimal ace value 
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