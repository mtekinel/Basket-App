import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";

export default function Layout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <nav
        style={{
          padding: "1rem",
          background: "#11324D",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <i
            class="bi bi-shop"
            style={{ color: "white", marginRight: "15px" }}
          ></i>
          <Link
            to="/"
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "white",
            }}
          >
            <span>Ana Sayfa</span>
          </Link>
          <Link
            to="/products"
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "white",
            }}
          >
            Ürünler
          </Link>
        </div>
        <Link
          to="/cart"
          style={{
            position: "relative",
            textDecoration: "none",
            color: "white",
          }}
        >
          🛒 Sepet
          {totalItems > 0 && (
            <span
              style={{
                background: "#B36458",
                color: "white",
                borderRadius: "50%",
                padding: "0.2rem 0.5rem",
                fontSize: "0.8rem",
                marginLeft: "0.5rem",
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
      <hr />
      <div style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
