import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function NotFound() {
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
      <main style={{ textAlign: "center" }}>
        <p style={{ fontSize: "1.9rem", fontWeight: "bold" }}>Soory,</p>
        <p style={{ fontSize: "1.9rem", fontWeight: "500", marginTop: "1rem" }}>
          we could not find the page you were looking for
        </p>
      </main>
      <Footer />
    </div>
  );
}
