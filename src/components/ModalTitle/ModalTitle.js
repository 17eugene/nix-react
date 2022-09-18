import { Typography } from "@mui/material";
import { styled } from "@mui/material";

const StyledModalTitle = styled(Typography)(() => ({
  fontWeight: 700,
  marginBottom: "30px",
}));

const ModalTitle = ({ title }) => {
  return <StyledModalTitle variant="h6">{title}</StyledModalTitle>;
};

export default ModalTitle;
