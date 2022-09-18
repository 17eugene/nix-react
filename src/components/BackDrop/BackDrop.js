import { Backdrop } from "@mui/material";
import { styled } from "@mui/material";

const StyledBackdrop = styled(Backdrop)(() => ({
  zIndex: 2000,
}));

const BackDrop = ({ children, open }) => {
  return <StyledBackdrop open={open}>{children}</StyledBackdrop>;
};

export default BackDrop;
