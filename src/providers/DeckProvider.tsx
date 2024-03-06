import React, { useState, createContext, ReactNode, useContext } from "react";
import { getTotal } from "../utils/getTotal";
import { checkWinner } from "../utils/checkWinner";

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

interface DeckTypes {
  success: boolean | null;
  deck_id: string | null;
  shuffled: boolean | null;
  remaining: number | null;
}

interface DrawCardTypes extends Omit<DeckTypes, "shuffled"> {
  cards: CardTypes[];
}

interface DeckProviderTypes extends DeckTypes {
  handleShuffle: () => void;
  beginGame: () => void;
  drawCard: () => void;
  getWinner: () => { houseTotal: number; playerTotal: number; winner: string };
  dealerCards: CardTypes[];
  playerCards: CardTypes[];
  setHands: () => void;
  playAgain: () => void;
}

const DeckProviderContext = createContext<DeckProviderTypes>({
  success: null,
  deck_id: null,
  shuffled: null,
  remaining: null,
  handleShuffle: () => undefined,
  beginGame: () => undefined,
  drawCard: () => undefined,
  getWinner: () => undefined,
  dealerCards: [],
  playerCards: [],
  setHands: () => undefined,
  playAgain: () => undefined,
});

interface DeckProviderProp {
  children: ReactNode;
}

const DeckProvider: React.FC<DeckProviderProp> = ({ children }) => {
  const [currentDeck, setDeck] = useState<DeckTypes>({
    success: null,
    deck_id: null,
    shuffled: null,
    remaining: null,
  });

  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const fetchGame = (url: string) => {
    const data = fetch(url)
      .then((data: Response) => data.json())
      .then((data: unknown) => {
        return data;
      });

    return data;
  };

  const beginGame = async () => {
    const deck = (await fetchGame(
      "https://deckofcardsapi.com/api/deck/new/"
    )) as DeckTypes;
    setDeck(deck);
  };

  const handleShuffle = () => {
    fetchGame(
      `https://www.deckofcardsapi.com/api/deck/${currentDeck.deck_id}/shuffle/?remaining=true`
    );
  };

  const playAgain = async () => {
    await fetchGame(
      `https://www.deckofcardsapi.com/api/deck/${currentDeck.deck_id}/shuffle/`
    );
    setHands();
  };

  const drawCard = async () => {
    const deck = (await fetchGame(
      `https://www.deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=1`
    )) as DrawCardTypes;

    setPlayerCards((prev) => {
      return [...prev, ...deck.cards];
    });
  };

  const setHands = async () => {
    const url = `https://www.deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=2`;

    const dealerHand = (await fetchGame(url)) as DrawCardTypes;
    const playerHand = (await fetchGame(url)) as DrawCardTypes;

    if (!dealerHand.success) {
      playAgain();
    }

    setDealerCards(dealerHand.cards);
    setPlayerCards(playerHand.cards);
  };

  const getWinner = () => {
    const houseTotal = getTotal(dealerCards);
    const playerTotal = getTotal(playerCards);
    const winner = checkWinner(houseTotal, playerTotal);
    return {
      houseTotal,
      playerTotal,
      winner,
    };
  };

  return (
    <DeckProviderContext.Provider
      value={{
        success: currentDeck.success,
        deck_id: currentDeck.deck_id,
        shuffled: currentDeck.shuffled,
        remaining: currentDeck.remaining,
        dealerCards,
        playerCards,
        handleShuffle,
        beginGame,
        setHands,
        drawCard,
        getWinner,
        playAgain,
      }}
    >
      {children}
    </DeckProviderContext.Provider>
  );
};

const useDeck = () => {
  const Deck = useContext(DeckProviderContext);
  return Deck;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DeckProvider, useDeck };
