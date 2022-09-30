import { Input } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledInput = styled(Input)(() => ({
  height: "35px",
  width: "200px",
  padding: "0 5px 0 5px",
  marginLeft: "40px",
}));

const Filter = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange}>
      Filter
    </StyledInput>
  );
};

export default Filter;

Filter.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
