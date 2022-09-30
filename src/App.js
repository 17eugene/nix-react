import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import ProductPage from "./pages/ProductPage/ProductPage";
import ModalPage from "./pages/ModalPage/ModalPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<ProductPage setEditingProduct={setEditingProduct} />}
        >
          <Route path="add" element={<ModalPage />} />
          <Route
            path="edit"
            element={<ModalPage editingProduct={editingProduct} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Container>
  );
}

export default App;
