import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await API.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      alert("Failed to fetch product");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/products/${id}`, product);

      alert("Product updated successfully!");

      navigate("/products");
    } catch (error) {
      alert("Failed to update product");
    }
  };

  return (
   <div className="form-box">
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <br /><br />

       <label className="checkbox-row">
  <input
    type="checkbox"
    name="inStock"
    checked={product.inStock}
    onChange={handleChange}
  />
  In Stock
</label>

        <br /><br />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;