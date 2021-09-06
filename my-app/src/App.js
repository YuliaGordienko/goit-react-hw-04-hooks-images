import React, { Component } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Searchbar from "./Searchbar/Searchbar";
import Searcbarinfo from "./Searchbarinfo/Searchbarinfo";

export default function App() {
  const [value, setValue] = useState("");

  const handleSubmitApp = (value) => {
    setValue(value);
  };
  // toggleModal = () => {
  //   this.setState((state) => ({
  //     showModal: !state.showModal,
  //   }));
  // };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmitApp} />
      <Searcbarinfo value={value} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}
