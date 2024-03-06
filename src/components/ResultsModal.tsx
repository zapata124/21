import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from "@mui/joy";
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
      <Button onClick={handleModalState} sx={{ borderRadius: 100 }}>
        Stand
      </Button>
      <Modal open={open} onClose={handleModalState}>
        <ModalDialog>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography level={"h3"}>{winner}</Typography>
          </Box>
          <ModalClose />
          <Typography>Game Score</Typography>
          <Typography>{houseTotal}</Typography>
          <Typography>{playerTotal}</Typography>
          <Button onClick={() => setHands()}>Play again</Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ResultsModal;
