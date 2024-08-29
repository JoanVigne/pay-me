export default function Header() {
  const header = document.createElement("header");

  // Create the h1 element
  const title = document.createElement("h1");
  title.textContent = "Le Wallet de Joan";
  header.appendChild(title);

  // Create the nav element
  const nav = document.createElement("nav");
  header.appendChild(nav);

  // Create the ul element
  const ul = document.createElement("ul");
  nav.appendChild(ul);

  //! ICI MODIF LE HEADER
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Cart", href: "/cart" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    ul.appendChild(li);
  });

  return header;
}
