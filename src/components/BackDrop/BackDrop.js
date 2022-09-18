import { Backdrop } from "@mui/material";

const BackDrop = ({ children, open }) => {
  return <Backdrop open={open}>{children}</Backdrop>;
};

export default BackDrop;
