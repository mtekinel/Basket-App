import { Link, Outlet } from "react-router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Yükleniyor...</p>;
  if (status === "failed") return <p>Hata: {error}</p>;

  const handleAddToCart = (product) => {
    const item = {
      id: product.id,
      title: product.title,
      price: Number(product.price),
      image: product.image,
    };

    dispatch(addToCart(item));
  };
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Ürünler
      </Typography>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
      >
        {products.slice(0, 15).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
            <Card
              sx={{
                height: "350px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6, // MUI gölge seviyesi (0-24 arası)
                },
              }}
            >
              <Link to={`${product.id}`}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    objectFit: "contain",
                    width: "100%",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Link>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" noWrap>
                  {product.title.slice(0, 20)}...
                </Typography>
                <Typography variant="body" color="#26355D">
                  {product.price} TL
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`${product.id}`}>
                  Detay
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleAddToCart(product)}
                >
                  Sepete Ekle
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </div>
  );
}
