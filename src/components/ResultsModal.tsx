import React, { useState } from "react";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useDeck } from "../providers/DeckProvider";
const ResultsModal: React.FC = () => {
  const { getWinner, setHands } = useDeck();
  const { houseTotal, playerTotal, winner } = getWinner();
  const [open, setOpen] = useState<boolean>(false);

  const handleModalState = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleModalState}>Stand</Button>
      <Modal open={open} onClose={handleModalState}>
        <ModalDialog>
          <ModalClose />
          <Typography>{houseTotal}</Typography>
          <Typography>{playerTotal}</Typography>
          <Typography>{winner}</Typography>
          <Button onClick={() => setHands()}>Play again</Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ResultsModal;
