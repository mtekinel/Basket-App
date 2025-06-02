import { useLoaderData } from "react-router";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigation } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export async function productDetailLoader({ params }) {
  const { productId } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    throw new Response("Not Found", { status: 404 });
  }
  const product = await res.json();
  return product;
}

export default function ProductDetail() {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Ürün sepete eklendi!");
  };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <p>Yükleniyor...</p>;
  }

  return (
    <Card style={{ maxWidth: 600, margin: "2rem auto" }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.title}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h6" color="primary" style={{ marginTop: "5px" }}>
          {product.price} TL
        </Typography>
        <ButtonGroup>
          <Button
            variant="contained"
            component={Link}
            to="/products"
            style={{ marginTop: "1rem", marginRight: "15px" }}
          >
            Geri Dön
          </Button>
          <Button
            variant="outlined"
            style={{
              marginTop: "1rem",
            }}
            onClick={handleAddToCart}
          >
            Sepete Ekle
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
