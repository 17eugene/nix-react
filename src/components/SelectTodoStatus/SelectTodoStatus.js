import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { styled } from "@mui/material";

const StyledFormControl = styled(FormControl)(() => ({
  marginBottom: "20px",
}));

const SelectTodoStatus = ({ chooseStatusOption }) => {
  return (
    <StyledFormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Status
      </InputLabel>
      <NativeSelect
        onChange={chooseStatusOption}
        defaultValue="Opened"
        inputProps={{
          name: "status",
          id: "uncontrolled-native",
        }}
      >
        <option value="Opened">Opened</option>
        <option value="Progress">Progress</option>
      </NativeSelect>
    </StyledFormControl>
  );
};

export default SelectTodoStatus;
