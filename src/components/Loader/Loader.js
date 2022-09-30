import { Dna } from "react-loader-spinner";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledLoaderBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Loader = ({ height, width }) => {
  return (
    <StyledLoaderBox>
      <Dna
        visible={true}
        height={height}
        width={width}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </StyledLoaderBox>
  );
};

export default Loader;

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
