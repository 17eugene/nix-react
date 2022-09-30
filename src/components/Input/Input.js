import { Input } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledInput = styled(Input)(() => ({
  padding: "5px 5px 0px 5px",
  marginBottom: "25px",
}));

const FormInput = ({ autoFocus, placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      autoFocus={autoFocus}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
