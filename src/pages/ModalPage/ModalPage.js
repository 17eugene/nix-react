import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getError } from "../../redux/product/product-selector";
import productOperations from "../../redux/product/product-operations";
import { closeModal } from "../../redux/product/product-slice";
import { Backdrop, Paper, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import Form from "../../components/Form/Form";
import FormInput from "../../components/Input/Input";
import Btn from "../../components/Btn/Btn";
import ModalError from "../../components/ModalError/ModalError";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledBackdrop = styled(Backdrop)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
}));

const StyledPaper = styled(Paper)(() => ({
  width: "300px",
  padding: "15px",
  position: "relative",
}));

const StyledTypography = styled(Typography)(() => ({
  textAlign: "center",
  fontWeight: 700,
  marginBottom: "30px",
}));

const StyledClose = styled(CloseOutlined)(() => ({
  position: "absolute",
  top: 10,
  right: 10,
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#f3f3f3",
  },
  transition: "all 0.15s linear",
}));

const ModalPage = ({ editingProduct }) => {
  const [title, setTitle] = useState(
    editingProduct ? editingProduct.title : ""
  );
  const [weight, setWeight] = useState(
    editingProduct ? editingProduct.weight : ""
  );
  const [description, setDescription] = useState(
    editingProduct ? editingProduct.description : ""
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const closeModalHandler = useCallback(() => {
    navigate("/");
    dispatch(closeModal());
    setTitle("");
    setWeight("");
    setDescription("");
  }, [navigate, dispatch]);

  const onChangeValue = useCallback((e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;

      case "weight":
        setWeight(e.target.value);
        break;

      case "description":
        setDescription(e.target.value);
        break;

      default:
        return;
    }
  }, []);

  const addProduct = useCallback(() => {
    const product = { title, weight, description };
    if (
      title.trim() === "" ||
      weight.trim() === "" ||
      description.trim() === ""
    ) {
      dispatch(productOperations.addProduct(product));
      return;
    }
    dispatch(productOperations.addProduct(product));
    closeModalHandler();
  }, [closeModalHandler, dispatch, title, weight, description]);

  const updateProduct = useCallback(() => {
    const product = {
      id: editingProduct?.id,
      title,
      weight,
      description,
    };
    if (
      title.trim() === "" ||
      weight.trim() === "" ||
      description.trim() === ""
    ) {
      dispatch(productOperations.updateProduct(product));
      return;
    }

    dispatch(productOperations.updateProduct(product));
    closeModalHandler();
  }, [
    dispatch,
    closeModalHandler,
    title,
    weight,
    description,
    editingProduct?.id,
  ]);

  return (
    <StyledBackdrop open={true}>
      <StyledPaper>
        <StyledClose onClick={closeModalHandler} />
        <StyledTypography variant="h6">
          {pathname.includes("edit") ? "Update product" : "Create product"}
          {error && <ModalError textError={error} />}
        </StyledTypography>

        <Form>
          <FormInput
            placeholder="Enter product name..."
            name="title"
            onChange={onChangeValue}
            value={title}
            autoFocus={true}
          />
          <FormInput
            placeholder="Enter product weight..."
            name="weight"
            onChange={onChangeValue}
            value={weight}
          />
          <FormInput
            placeholder="Enter product description..."
            name="description"
            onChange={onChangeValue}
            value={description}
          />
          <Btn
            size="medium"
            text="Submit"
            variant="contained"
            onClick={pathname.includes("add") ? addProduct : updateProduct}
          />
        </Form>
      </StyledPaper>
    </StyledBackdrop>
  );
};

export default ModalPage;

ModalPage.propTypes = {
  editingProduct: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    weight: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  }),
};
