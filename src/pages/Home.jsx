import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      {/* Hero Section */}
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Hoşgeldiniz!
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        En kaliteli ürünleri en uygun fiyatlarla sunuyoruz. Hemen keşfedin!
      </Typography>
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"
          >
            Ürünlere Göz At
          </Button>
        </Grid>
      </Grid>

      {/* Öne Çıkan Kategoriler / Ürünler */}
      <Typography variant="h5" component="h2" gutterBottom>
        Popüler Kategoriler
      </Typography>
      <Grid container spacing={4}>
        {[
          "Elektronik",
          "Giyim",
          "Ev & Yaşam",
          "Bahçe",
          "Kozmetik",
          "Oyuncak",
          "Dekorasyon",
        ].map((category) => (
          <Grid item xs={12} sm={4} key={category}>
            <Card
              sx={{
                height: 140,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center">
                  {category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
