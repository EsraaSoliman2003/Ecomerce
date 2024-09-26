import React from "react";
import './loading.css'

export default function Loading() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginBlock: "9rem" }}
    >
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
