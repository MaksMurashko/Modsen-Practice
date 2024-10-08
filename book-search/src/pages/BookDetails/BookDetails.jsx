import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import coverImg from "@assets/no_cover.jpg";
import "./BookDetails.css";
import BackButton from "@components/BackButton";
import BookImage from "@BookCard/BookImage";
import BookInfo from "@BookCard/BookInfo";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return <div className="book-details">Книга не найдена.</div>;
  }

  const { title, authors, categories, thumbnail, description } = book;

  return (
    <section className="book-details">
      <div className="container">
        <BackButton onClick={() => navigate(-1)} />
        <div className="book-details-content grid">
          <BookImage
            thumbnail={thumbnail}
            title={title}
            coverImg={coverImg}
            className={"book-details-img"}
          />
          <BookInfo
            title={title}
            authors={authors}
            categories={categories}
            description={description}
            boxClass={"book-details-info"}
            itemDivClass={"book-details-item"}
            itemSpanClass={"fw-6"}
          />
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
