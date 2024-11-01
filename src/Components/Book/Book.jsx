import React from "react";

const Book = ({ book }) => {
    const {bookName, author, image, rating, category, tags} = book;
  return (
    <div className="card">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex justify-between items-center">
          <p>{category}</p>
          <p>{rating}
            <span><i class="fa-regular fa-star"></i></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
