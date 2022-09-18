import { Typography, Checkbox, Box, Badge } from "@mui/material";
import { styled } from "@mui/material";

const StyledNum = styled(Typography)(() => ({
  fontSize: "14px",
  color: "#0b0b0b",
  marginRight: "10px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "baseline",
  position: "relative",
}));

const StyledBadge = styled(Badge)(() => ({
  position: "absolute",
  top: "-5px",
  right: "-40px",
  width: "max-content"

}));

const TodoItem = ({
  id,
  task,
  status,
  completed,
  toggleCompleteHandler,
  index,
}) => {
  return (
    <>
      <StyledBox>
        <StyledNum>{index + 1}.</StyledNum>
        <Typography>{task}</Typography>
        <StyledBadge
          badgeContent={status}
          color={
            status === "Opened"
              ? "primary"
              : status === "Progress"
              ? "secondary"
              : "success"
          }
        ></StyledBadge>
      </StyledBox>

      <Checkbox
        checked={completed}
        onChange={() => toggleCompleteHandler(id)}
      />
    </>
  );
};

export default TodoItem;
