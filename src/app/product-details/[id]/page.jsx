import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// البيانات الثابتة داخل نفس الصفحة
const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop...",
    category: "men's clothing",
    image: "./images/1.png",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket...",
    category: "men's clothing",
    image: "./images/2.webp",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
    category: "men's clothing",
    image: "./images/3.webp",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice...",
    category: "men's clothing",
    image: "./images/4.webp",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
    category: "jewelery",
    image: "./images/5.webp",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    category: "jewelery",
    image: "./images/6.webp",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
    category: "jewelery",
    image: "./images/7.webp",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "./images/8.png",
    rating: { rate: 1.9, count: 100 },
  },
];

export function generateMetadata({ params }) {
  const product = data.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default function Page({ params }) {
  const product = data.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <main
        className="flex"
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "10px", left: "15px" }}>
          <Link href={"/"} style={{ display: "block" }}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ width: "2rem" }} />
          </Link>
        </div>
        <Image
          src={product.image.replace("./", "/")}
          type="image/png"
          alt={product.title}
          height={266}
          width={266}
        />

        <div className="product-details">
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
            }}
          >
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
          </div>
          <p className="description">{product.description}</p>
          <button className="flex add-to-cart">
            <FontAwesomeIcon icon={faCartPlus} style={{ width: "1rem" }} />
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
