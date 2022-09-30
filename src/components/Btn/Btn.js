import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Btn = ({ variant, text, type, onClick, size }) => {
  return (
    <Button variant={variant} size={size} type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Btn;

Btn.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};
