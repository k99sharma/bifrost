// importing libraries
import { useState } from "react";
import { Modal, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineClose } from "react-icons/ai";

type ModalContentType = {
  label: string | null;
  value: string | null;
};

// modal content component
function ModalContent({ label, value }: ModalContentType) {
  return (
    <div className="modalContent mb-3 flex items-center justify-between">
      <div className="modalContent-label">
        <Typography variant="h6">{label}</Typography>
      </div>

      <div className="modalContent-value">
        <Typography>{value}</Typography>
      </div>
    </div>
  );
}

// country information component
export default function CountryInformation({ countryData }: any | null) {
  // states
  const [open, setOpen] = useState<boolean>(false);

  // modal handler
  const handleOpen = () => {
    console.log(countryData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return countryData !== null ? (
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
              padding: 2,
              boxShadow: 24,
              borderRadius: 4,
              width: 300,
            }}
          >
            <div className="modal">
              {/* header */}
              <div className="modal-header mb-5 flex items-center justify-between">
                <div className="modal-header-title">
                  <Typography variant="h5">{countryData.name}</Typography>
                </div>

                <div className="modal-header-closeButton">
                  <button onClick={handleClose}>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>

              {/* content */}
              <div className="modal-content">
                <div className="modal-content-flag mb-5">
                  <img
                    loading="lazy"
                    height={30}
                    width={60}
                    src={countryData.flags.svg}
                    alt={countryData.name}
                  />
                </div>

                <div className="modal-content-area">
                  <ModalContent
                    label={"Area"}
                    value={`${countryData.area} sq. km`}
                  />
                </div>

                <div className="modal-content-population">
                  <ModalContent
                    label={"Population"}
                    value={countryData.population}
                  />
                </div>

                <div className="modal-content-region">
                  <ModalContent label={"Region"} value={countryData.region} />
                </div>

                <div className="modal-content-continents">
                  <ModalContent
                    label={"Continents"}
                    value={countryData.continents[0]}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  ) : null;
}
