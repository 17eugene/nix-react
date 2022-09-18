import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  width: "35%",
  marginLeft: "auto",
  marginBottom: "15px",
}));

const StyledTextField = styled(TextField)(() => ({
  fontSize: "14px",
  color: "#C3C8C8",
}));

const Filter = ({ onChange, value }) => {
  return (
    <StyledBox>
      <StyledTextField
        variant="outlined"
        placeholder="Search by status..."
        size="small"
        fullWidth
        value={value}
        onChange={onChange}
      />
    </StyledBox>
  );
};

export default Filter;
