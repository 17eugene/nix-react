import { Input } from "@mui/material";
import { styled } from "@mui/material";

const StyledInput = styled(Input)(() => ({
  width: "100%",
  outline: "none",
  padding: "0px 5px",
  marginBottom: "20px",
}));

const TodoInput = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TodoInput;
