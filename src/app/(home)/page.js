import { Suspense } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "./home.css";
import Products from "./products";
import Loading from "./loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended flex">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ width: "1.9rem", marginRight: "1.2rem" }}
          />
          Recommended for you
        </h1>

        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
