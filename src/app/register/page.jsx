import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export const metadata = {
  title: "Register page",
  description: "Description for Register page",
};

export default function Register() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
        backgroundColor: "#212529",
        color: "white",
      }}
    >
      <Header />

      <main className="px-3" style={{
        padding: "0 20px"
      }}>
        <form
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: 30,
            fontSize: "1.5rem",
          }}
        >
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              aria-describedby="emailHelp"
              className="form-control"
              id="username"
              type="email"
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "50px",
                padding: "15px",
                fontSize: "20px",
              }}
            />
          </div>
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              aria-describedby="emailHelp"
              className="form-control"
              id="exampleInputEmail1"
              type="email"
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "50px",
                padding: "15px",
                fontSize: "20px",
              }}
            />
          </div>
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <label className="form-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              style={{
                borderRadius: "5px",
                outline: "none",
                height: "50px",
                padding: "15px",
                fontSize: "20px",
              }}
              className="form-control"
              id="exampleInputPassword1"
              type="password"
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
            }}
            className="mb-3 form-check"
          >
            <input
              className="form-check-input"
              id="exampleCheck1"
              type="checkbox"
              style={{ width: "20px" }}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button
            style={{
              backgroundColor: "#0d6efd",
              width: "190px",
              textAlign: "center",
              padding: "5px 15px",
              borderRadius: "5px",
            }}
            className="btn btn-primary"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
