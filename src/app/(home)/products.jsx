
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getData() {
  const res = await fetch(`http://localhost:4000/products`, {
    next: {
      revalidate: 1,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }

  return res.json();
}



export default async function Products() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = await getData();

  return (
    <section className="products flex">
      {data.map((item) => {
        return (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <Image  src={`/${item.image}`} type="image/png" alt="img here" height="266" width="266" />
            </Link>
            <div
              className="content"
              style={{
                width: "266px",
              }}
            >
              <h1 className="title">{item.title.slice(0, 15)}...</h1>
              <p className="description">{item.description}</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">${item.price}</div>
                <button
                className="add-to-cart flex"
                
              >
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ width: "1rem" }}
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
