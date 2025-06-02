import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <Typography variant="h4" gutterBottom>
        Sepetiniz
      </Typography>
      <List>
        {items.length === 0 ? (
          <Typography>Sepetiniz boş.</Typography>
        ) : (
          items.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.title}
                secondary={`Fiyat: ${item.price} TL | Adet: ${item.quantity}`}
              />
              <Button onClick={() => handleRemove(item.id)} color="error">
                Kaldır
              </Button>
            </ListItem>
          ))
        )}
      </List>
      {items.length > 0 && (
        <Button onClick={handleClearCart} color="warning" variant="contained">
          Sepeti Temizle
        </Button>
      )}
      <Typography variant="h6" style={{ marginTop: "1rem" }}>
        Toplam:
        {items
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
        TL
      </Typography>
    </div>
  );
}
