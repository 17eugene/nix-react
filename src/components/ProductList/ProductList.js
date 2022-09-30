import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { List, ListItem, ButtonGroup } from "@mui/material";
import productOperations from "../../redux/product/product-operations";
import ProductItem from "../ProductItem/ProductItem";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Btn from "../Btn/Btn";
import PropTypes from "prop-types";

const StyledList = styled(List)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
}));

const StyledListItem = styled(ListItem)(() => ({
  ":hover": {
    boxShadow: "2px 3px 5px #000000",
    scale: "1.02",
    border: "2px solid #26DBFB",
  },
  transition: "all 0.15s linear",
  padding: "10px",
  border: "2px solid #A0AAAA",
  borderRadius: "4px",
  width: "160px",
  backgroundColor: "#E5EBEB",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const ProductList = ({ openModal, setEditingProduct, products }) => {
  const dispatch = useDispatch();

  const deleteProduct = useCallback(
    (id) => {
      dispatch(productOperations.deleteProduct({ id }));
    },
    [dispatch]
  );

  const getProductToUpdate = useCallback(
    (id) => {
      const productToEdit = products.find((product) => product.id === id);
      setEditingProduct(productToEdit);
    },
    [setEditingProduct, products]
  );

  return (
    <>
      <StyledList>
        {products ?
          products.map(({ id, title, weight, description }) => (
            <StyledListItem key={id} onClick={() => getProductToUpdate(id)}>
              <ProductItem
                title={title}
                weight={weight}
                description={description}
              />
              <ButtonGroup>
                <Btn
                  size="small"
                  text="Edit"
                  variant="outlined"
                  type="button"
                  onClick={openModal}
                />
                <Btn
                  size="small"
                  text="Delete"
                  variant="contained"
                  type="button"
                  onClick={() => deleteProduct(id)}
                />
              </ButtonGroup>
            </StyledListItem>
          )) : "No goods added:("}
      </StyledList>
      <Outlet />
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  openModal: PropTypes.func,
  setEditingProduct: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      weight: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};
