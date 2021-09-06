import React, { useEffect } from "react";
import s from "./Modal.module.css";
export default function Modal({ toggle, url }) {
  useEffect(() => {
    console.log("это эффект");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggle();
    }
  };
  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggle();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdrop}>
      <div className={s.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
}
