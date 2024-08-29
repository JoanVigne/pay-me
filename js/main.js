// main.js
import { initTypography } from "./init/typography.js";

// Import the fakeProducts constant from fakeData.js
import { fakeProducts } from "./db/fakeData.js";
import Header from "./components/Header.js";
import CardProduct from "./components/CardProduct.js";

document.addEventListener("DOMContentLoaded", () => {
  initTypography();
  console.log(fakeProducts);
  // components :
  const app = document.getElementById("app");
  app.appendChild(Header());
  // products avec CardProduct.js
  // PRODUCTS
  const main = document.createElement("main");
  app.appendChild(main);
  const containerProduct = document.createElement("div");
  containerProduct.classList.add("container-products");
  fakeProducts.forEach((product) => {
    const card = new CardProduct(product);
    containerProduct.appendChild(card.render());
  });
  main.appendChild(containerProduct);
});
