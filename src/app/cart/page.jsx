import React from "react";
import "./cart.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cart page",
  description: "Description for Cart page",
};

const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 19.95,
    category: "men's clothing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum ipsum maiores aut maxime natus porro perspiciatis optio autem animi? Error illo temporibus totam delectus, officia fugit laborum sunt consequatur?",
    image: "./images/1.png",
    rating: { rate: 3.9, count: 120 },
    orderd: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.63,
    category: "men's clothing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum ipsum maiores aut maxime natus porro perspiciatis optio autem animi? Error illo temporibus totam delectus, officia fugit laborum sunt consequatur?",
    image: "./images/2.webp",
    rating: { rate: 4.1, count: 259 },
    orderd: 3,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum ipsum maiores aut maxime natus porro perspiciatis optio autem animi? Error illo temporibus totam delectus, officia fugit laborum sunt consequatur?",
    image: "./images/3.webp",
    rating: { rate: 4.7, count: 500 },
    orderd: 2,
  },
];

export default function Cart() {
  const sum = data.reduce((acc, item) => acc + item.orderd * item.price, 0);
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
        className=""
        style={{
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <section className="cart">
          {data.map((item) => {
            return (
              <article
                title={item.title}
                key={item.id}
                className="product flex"
              >
                <button
                  style={{
                    margin: "auto",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ width: "1rem" }}
                  />
                </button>
                <p className="price">${item.price}</p>
                <div
                  className="flex"
                  style={{
                    marginRight: "1rem",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <button className="decrease">-</button>
                  <div className="quantity flex">{item.orderd}</div>
                  <button className="increase">+</button>
                </div>
                <p
                  style={{
                    width: "30%",
                  }}
                  className="title"
                >
                  {item.title.slice(0, 10)}...
                </p>

                <Image
                  style={{
                    borderRadius: "0.22rem",
                  }}
                  src={`/${item.image}`}
                  type="image/png"
                  alt="img here"
                  height="70"
                  width="70"
                />
              </article>
            );
          })}
        </section>

        <button
          className="clear flex"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <FontAwesomeIcon
            className="fa-solid fa-trash-can icon"
            icon={faTrashCan}
            style={{
              color: "#fff",
              marginRight: "0.5rem",
              width: "1rem",
            }}
          />
          Clear Cart
        </button>

        <section className="summary">
          <h1>Cart Summary</h1>
          <div className="flex">
            <p className="Subtotal">Subtotal</p>
            <p>${sum.toFixed(2)}</p>
          </div>
          <button className="checkout" disabled>
            CHECKOUT
          </button>
          <Link href="./signin"> Please Sign in to continue. </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
