import { Paper } from "@mui/material";
import { styled } from "@mui/material";

const StyledPaper = styled(Paper)(() => ({
  width: "350px",
  maxHeight: "300px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const Modal = ({ children }) => {
  return <StyledPaper>{children}</StyledPaper>;
};

export default Modal;
