import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`http://localhost:4000/products/${id}/`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function Page({ params }) {
  const data = await getData(params.id);

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
        <div style={{position: "absolute", top: "10px", left: "15px"}}>
        <Link href={"/"} style={{display: "block"}}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ width: "2rem",
            
           }} />
        </Link>
        </div>
        <Image src={`/${data.image}`} type="image/png" alt="img here" height="266" width="266" />

        <div className="product-details">
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
            }}
          >
            <h2>{data.title}</h2>
            <p className="price">${data.price}</p>
          </div>
          <p className="description">{data.description}</p>
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
