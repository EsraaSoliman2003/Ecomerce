import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/app/data"; // استدعاء البيانات الثابتة

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
