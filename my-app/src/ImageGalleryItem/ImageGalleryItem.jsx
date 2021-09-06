import React, { useState } from "react";
import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";
export default function ImageGalleryItem({ array }) {
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const handleClickImg = (e) => {
    setLargeImageURL(e.target.dataset.url);

    toggleModal();
  };

  return (
    <>
      <ul className={s.ImageGallery}>
        {array.map((item) => (
          <li
            key={item.id}
            className={s.ImageGalleryItem}
            onClick={handleClickImg}
          >
            <img
              src={item.webformatURL}
              alt={item.tag}
              className={s.ImageGalleryItemimage}
              data-url={item.largeImageURL}
            />
          </li>
        ))}
      </ul>
      {showModal && <Modal url={largeImageURL} toggle={toggleModal} />}
    </>
  );
}
