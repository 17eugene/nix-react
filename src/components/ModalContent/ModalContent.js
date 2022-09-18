import { Box, Alert } from "@mui/material";
import TodoInput from "../TodoInput/TodoInput";
import Btn from "../Btn/Btn";
import ModalTitle from "../ModalTitle/ModalTitle";
import SelectTodoStatus from "../SelectTodoStatus/SelectTodoStatus";
import { styled } from "@mui/material";
import { Close } from "@mui/icons-material";

const StyledBox = styled(Box)(() => ({
  width: "350px",
  maxHeight: "380px",
  padding: "20px",
  background: "#fff",
  textAlign: "center",
  borderRadius: "4px",
  position: "relative",
}));

const StyledCloseIcon = styled(Close)(() => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  position: "absolute",
  top: "10px",
  right: "10px",
  outline: "none",
}));

const StyledAlert = styled(Alert)(() => ({
  marginBottom: "15px",
  display: "flex",
  justifyContent: "center",
}));

const ModalContent = ({
  closeModal,
  inputValue,
  inputChangeHandler,
  inputError,
  submitEditTodo,
  createTodo,
  selectedTodo,
  editInputChangeHandler,
  editingTask,
  chooseStatusOption,
}) => {
  return (
    <StyledBox>
      <StyledCloseIcon onClick={closeModal} />
      <ModalTitle title={selectedTodo ? "Edit todo" : "Create todo"} />
      <TodoInput
        value={selectedTodo ? editingTask : inputValue}
        onChange={selectedTodo ? editInputChangeHandler : inputChangeHandler}
        placeholder="Enter your todo text here..."
      />
      <SelectTodoStatus chooseStatusOption={chooseStatusOption} />
      
      {inputError && <StyledAlert severity="error">{inputError}</StyledAlert>}
      <Btn text="Submit" onClick={selectedTodo ? submitEditTodo : createTodo} />
    </StyledBox>
  );
};

export default ModalContent;
