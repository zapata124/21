import React, { useState, createContext, ReactNode, useContext } from "react";

type CardTypes = {
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

interface DeckProviderTypes {
  success: boolean | null;
  deck_id: string | null;
  shuffled: boolean | null;
  remaining: number | null;
  handleShuffle: () => void;
  updateDeck: (deckCount: number) => void;
  beginGame: () => void;
  getHand: (playerType: string, count: number) => void;
  houseCards: CardTypes[];
  playerCards: CardTypes[];
  drawCard: () => void;
}

const DeckProviderContext = createContext<DeckProviderTypes>({
  success: null,
  deck_id: null,
  shuffled: null,
  remaining: null,
  handleShuffle: () => undefined,
  updateDeck: () => undefined,
  beginGame: () => undefined,
  getHand: () => undefined,
  houseCards: [],
  playerCards: [],
  drawCard: () => undefined,
});

interface DeckProviderProp {
  children: ReactNode;
}
const DeckProvider: React.FC<DeckProviderProp> = ({ children }) => {
  const [deck, setDeck] = useState<DeckTypes>({
    success: null,
    deck_id: null,
    shuffled: null,
    remaining: null,
  });

  const [houseCards, setHouseCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const fetchGame = (url: string) => {
    fetch(url)
      .then((deck: any) => deck.json())
      .then((deck: any) => {
        setDeck(deck);
      });
  };
  const beginGame = () => {
    fetchGame("https://deckofcardsapi.com/api/deck/new/");
  };

  const handleShuffle = () => {
    fetchGame(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`
    );
  };

  const getHand = (playerType: string, count: number) => {
    const mapPlayer = {
      house: setHouseCards,
      player: setPlayerCards,
    };
    fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${count}`
    )
      .then((deck: any) => deck.json())
      .then((deck: any) => {
        mapPlayer[playerType](deck.cards);
      });
  };

  const drawCard = () => {
    fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    )
      .then((deck: any) => deck.json())
      .then((deck: any) => {
        setPlayerCards((prev) => {
          return [...prev, ...deck.cards];
        });
      });
  };
  const updateDeck = (deckCount: number) => {
    setDeck((prev: DeckTypes) => {
      return {
        ...prev,
        remaining: deckCount,
      };
    });
  };

  return (
    <DeckProviderContext.Provider
      value={{
        success: deck.success,
        deck_id: deck.deck_id,
        shuffled: deck.shuffled,
        remaining: deck.remaining,
        handleShuffle,
        updateDeck,
        beginGame,
        getHand,
        houseCards,
        playerCards,
        drawCard,
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

export { DeckProvider, useDeck };
