import React from "react";
import "@BookList/BookList.css";

const BookImage = ({ thumbnail, title, coverImg, className }) => {
  return (
    <div className={`${className}`}>
      <img src={thumbnail || coverImg} alt={title} />
    </div>
  );
};

export default BookImage;
