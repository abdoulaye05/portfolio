import { Modal, Box } from "@mui/material";
import ModalContent from "./ModalContent";

function BasicModal({ open, handleClose, work }) {
  if (!work) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          // border: '2px solid #000',
          boxShadow: 24,
          p: 12,
        }}
      >
        <ModalContent />
        {/* <Typography id="modal-title" variant="h6" component="h2">
          {work.title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {work.subtitle}
        </Typography>
        <img src={work.cover} alt={work.title} style={{ width: '100%', marginTop: '1rem' }} />
        {/* Ajoutez d'autres détails du projet ici */}
        {/* <button onClick={handleClose}>Fermer</button> */}
      </Box>
    </Modal>
  );
}

export default BasicModal;
