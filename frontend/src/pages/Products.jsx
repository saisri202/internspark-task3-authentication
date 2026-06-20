import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isManager = user?.role === "Manager";

  const requireLogin = () => {
    alert("🔒 Please login or signup to make changes to products.");
    navigate("/login");
  };

  const managerOnly = (action) => {
    alert(`Only managers can ${action} products.`);
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await API.get("/products");
      setProducts(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      alert("Product deleted successfully!");
      getProducts();
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div>
      <div className="product-header">
        <h1>Products</h1>

        {!user ? (
          <button onClick={requireLogin}>Add Product</button>
        ) : isManager ? (
          <Link to="/add">
            <button>Add Product</button>
          </Link>
        ) : (
          <button onClick={() => managerOnly("add")}>Add Product</button>
        )}
      </div>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Category: {product.category}</p>
              <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

              {!user ? (
                <>
                  <button onClick={requireLogin}>Edit</button>
                  <button className="delete-btn" onClick={requireLogin}>
                    Delete
                  </button>
                </>
              ) : isManager ? (
                <>
                  <Link to={`/edit/${product._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => managerOnly("edit")}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => managerOnly("delete")}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;