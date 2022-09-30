import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledTypographyWeight = styled(Typography)(() => ({
  fontSize: "12px",
}));

const ProductItem = ({ title, weight, description, onClick }) => {
  return (
    <Box onClick={onClick}>
      <Typography variant="h5">{title}</Typography>
      <StyledTypographyWeight component="span">{weight}</StyledTypographyWeight>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
