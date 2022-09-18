import { List, ListItem, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import TodoItem from "../TodoItem/TodoItem";

const StyledListItem = styled(ListItem)(() => ({
  width: "50%",
  border: "2px solid #f3f3f3",
  borderRadius: "4px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  background: "#CEFCFF",
}));

const StyledButtonDelete = styled(IconButton)(() => ({
  position: "absolute",
  right: "-50px",
  color: "#ff0022",
  cursor: "pointer",
}));

const StyledButtonEdit = styled(IconButton)(() => ({
  position: "absolute",
  right: "-100px",
  color: "#9A8B87",
  cursor: "pointer",
}));

const TodoList = ({
  toggleCompleteHandler,
  todos,
  deleteTodo,
  selectTodoToEdit,
}) => {
  return (
    <List>
      {todos.length > 0 &&
        [...todos].map(({ id, task, completed, status }, index) => (
          <StyledListItem key={id}>
            <TodoItem
              index={index}
              id={id}
              task={task}
              completed={completed}
              status={status}
              toggleCompleteHandler={toggleCompleteHandler}
            />
            <Tooltip title="Delete">
              <StyledButtonDelete onClick={() => deleteTodo(id)}>
                <Delete />
              </StyledButtonDelete>
            </Tooltip>

            <Tooltip title="Edit">
              <StyledButtonEdit onClick={() => selectTodoToEdit(id)}>
                <Edit />
              </StyledButtonEdit>
            </Tooltip>
          </StyledListItem>
        ))}
    </List>
  );
};

export default TodoList;
