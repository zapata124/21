export const checkWinner = (houseTotal: number, playerTotal: number) => {
    if (playerTotal > 21) {
      return "Dealer";
    }
    return playerTotal > houseTotal ? "Player" : "Dealer";
  };