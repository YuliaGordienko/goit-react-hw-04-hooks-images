import React, { Component } from "react";
import s from "./Button.module.css";
export default function Button({ handleClick }) {
  return (
    <button onClick={handleClick} type="button" className={s.buttonLoad}>
      Load more
    </button>
  );
}
