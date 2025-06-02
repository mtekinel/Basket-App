export async function productsLoader() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Ürünler alınamadı");
  }

  return await res.json();
}
