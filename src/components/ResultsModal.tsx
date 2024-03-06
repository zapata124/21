import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
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

  const handlePlayAgain = () => {
    setHands();
    handleModalState();
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
            <Typography level={"h3"}>{winner} Wins!</Typography>
          </Box>
          <ModalClose />
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography level={"body-md"}>Score</Typography>
            <Stack direction={"row"} spacing={1}>
              <Typography level={"body-sm"}>Dealer </Typography>
              <Typography level={"body-sm"}>{houseTotal}</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography level={"body-sm"}>Player</Typography>
              <Typography level={"body-sm"}>{playerTotal}</Typography>
            </Stack>
          </Stack>
          <Button onClick={handlePlayAgain}>Play again</Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ResultsModal;
