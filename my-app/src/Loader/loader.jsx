import Loader from "react-loader-spinner";
import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Spinner() {
  //other logic

  return (
    <div>
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
}
