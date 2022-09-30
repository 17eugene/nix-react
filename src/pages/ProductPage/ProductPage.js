import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import productOperations from "../../redux/product/product-operations";
import {
  getAllProducts,
  isLoading,
} from "../../redux/product/product-selector";
import ProductList from "../../components/ProductList/ProductList";
import Btn from "../../components/Btn/Btn";
import SelectSort from "../../components/SelectSort/SelectSort";
import Filter from "../../components/Filter/Filter";
import Form from "../../components/Form/Form";
import Loader from "../../components/Loader/Loader";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledBox = styled(Box)(() => ({
  paddingTop: "40px",
}));

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "25px",
}));

const sortOptions = [
  { value: "increasing", name: "Increasing" },
  { value: "descending", name: "Descending" },
];

const ProductPage = ({ setEditingProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const loading = useSelector(isLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState("");

  const params = useMemo(() => {
    return {};
  }, []);

  const selectedSortOption = searchParams.get("sortBy") || "";

  useEffect(() => {
    dispatch(productOperations.getAllProducts());
  }, [dispatch]);

  const sortedProducts = useMemo(() => {
    if (selectedSortOption) {
      if (selectedSortOption === "increasing") {
        return [...products].sort((a, b) => a.weight.localeCompare(b.weight));
      } else {
        return [...products].sort((a, b) => b.weight.localeCompare(a.weight));
      }
    }

    return products;
  }, [products, selectedSortOption]);

  const SortedAndFilteredProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [sortedProducts, filterValue]);

  const onFilterChange = useCallback(
    (e) => {
      const query = e.target.value;
      setFilterValue(query);
      if (query.length) {
        params.product = query;
      } else {
        params.product = "";
      }

      setSearchParams(params);
    },
    [setSearchParams, params]
  );

  const sortProducts = useCallback(
    (e) => {
      const sortValue = e.target.value;
      if (sortValue) {
        params.sortBy = sortValue;
      }
      setSearchParams(params);
    },
    [setSearchParams, params]
  );

  const openModal = useCallback(
    (e) => {
      const buttonText = e.target.innerText;
      if (buttonText.includes("EDIT")) {
        navigate("/edit");
      } else {
        navigate("/add");
      }
    },
    [navigate]
  );

  return (
    <StyledBox>
      <StyledWrapper>
        <Btn
          variant="contained"
          text="Create"
          type="button"
          onClick={openModal}
          size="medium"
        />
        <Form>
          <SelectSort
            defaultValue="Sort by weight"
            options={sortOptions}
            onChange={sortProducts}
            value={selectedSortOption}
          />
          <Filter
            placeholder="Search by name..."
            value={filterValue}
            onChange={onFilterChange}
          />
        </Form>
      </StyledWrapper>
      {loading ? (
        <Loader height="100" width="100" />
      ) : (
        <ProductList
          products={SortedAndFilteredProducts}
          setEditingProduct={setEditingProduct}
          openModal={openModal}
        />
      )}
    </StyledBox>
  );
};

export default ProductPage;

ProductPage.propTypes = {
  setEditingProduct: PropTypes.func,
};
