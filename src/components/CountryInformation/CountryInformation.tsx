// importing libraries
import { useState, useEffect } from "react";
import { Modal, Button } from "@mui/material";
import { Box } from "@mui/system";

// country information component
export default function CountryInformation({ countryData }: any | null) {
  // states
  const [open, setOpen] = useState<boolean>(false);

  // modal handler
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return countryData === null ? (
    <div className="countryInformation">
      <div className="countryInformation-button my-5">
        <Button variant="contained" color="info" onClick={handleOpen}>
          Explore
        </Button>
      </div>

      <div className="countryInformation-modal">
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: 4,
              boxShadow: 24,
            }}
          >
            Hello
          </Box>
        </Modal>
      </div>
    </div>
  ) : null;
}
