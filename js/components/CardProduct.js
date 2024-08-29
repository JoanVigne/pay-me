class CardProduct {
  constructor(product) {
    this.product = product;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card-product");

    const image = document.createElement("img");
    image.src = this.product.imageUrl;
    image.alt = this.product.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.classList.add("card-title");
    name.textContent = this.product.name;
    card.appendChild(name);

    const price = document.createElement("p");
    price.textContent = `$${this.product.price}`;
    card.appendChild(price);

    return card;
  }
}

export default CardProduct;
