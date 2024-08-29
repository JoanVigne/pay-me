class CardProduct {
  constructor(product) {
    this.product = product;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card-product");
    card.addEventListener("click", () => handleClick(this.product));
    const image = document.createElement("img");
    image.src = this.product.imageUrl;
    image.alt = this.product.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.classList.add("card-title");
    name.textContent = this.product.name;
    card.appendChild(name);

    const description = document.createElement("p");
    name.classList.add("card-description");
    description.textContent = this.product.description;
    card.appendChild(description);

    const price = document.createElement("div");
    price.classList.add("card-price");
    price.textContent = `€${this.product.price}`;
    card.appendChild(price);

    return card;
  }
}

function handleClick(product) {
  console.log("Product details:", product);
}
export default CardProduct;
