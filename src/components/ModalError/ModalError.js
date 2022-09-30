import { Alert } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledAlert = styled(Alert)(() => ({
  fontSize: "12px",
  padding: "0 20px 0 20px",
  textAlign: "center",
  margin: "0 auto",
}));

const ModalError = ({ textError }) => {
  return <StyledAlert severity="error">{textError}</StyledAlert>;
};

export default ModalError;

ModalError.propTypes = {
  textError: PropTypes.string,
};
