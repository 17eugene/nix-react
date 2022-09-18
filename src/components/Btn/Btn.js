import { Button } from "@mui/material";

const Btn = ({ text, onClick }) => {
  return (
    <Button type="button" variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

export default Btn;
