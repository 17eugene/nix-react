import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledNotFoundBox = styled(Box)(() => ({
  background: `url(https://media4.giphy.com/media/PtdOBG0BD9Vvi/giphy.gif)`,
  width: "100%",
  height: "500px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  textAlign: "center",
  paddingTop: "40px",
  position: "relative",
}));

const StyledNotFoundTypography = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: 700,
  position: "absolute",
  top: "13%",
  left: "40%",
  color: "#fff",
}));

const NotFoundPage = () => {
  return (
    <StyledNotFoundBox>
      <StyledNotFoundTypography>Page not found!</StyledNotFoundTypography>
    </StyledNotFoundBox>
  );
};

export default NotFoundPage;
