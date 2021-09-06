import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/loader";

export default function Searcbarinfo({ showModal, value }) {
  const [valueSearch, setValueSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModalSearch, setShowModalSearch] = useState(showModal);
  // state = {
  //   value: null,
  //   loading: false,
  //   page: 1,
  //   showModal: this.props.showModal,
  // };
  useEffect(() => {
    if (!value) {
      return;
    }

    setValueSearch(null);
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.hits.length === 0) {
          toast("Try to search something else");
        }
        setValueSearch(res.hits);
      })

      .finally(() => setLoading(false));
  }, [value]);
  useEffect(() => {
    if (page !== 1) {
      setLoading(true);
      fetch(
        `https://pixabay.com/api/?q=${value}&page=${page}&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((res) => {
          setValueSearch((prevState) => [...prevState, ...res.hits]);
        })

        .finally(() => {
          setLoading(false);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
  }, [page]);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div>
      {loading && <Loader />}
      {valueSearch && <ImageGalleryItem array={valueSearch} />}
      {value && value.length > 0 && <Button handleClick={handleClick} />}
    </div>
  );
}
