import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card border p-6 flex flex-col justify-between">
        <figure
          style={{ backgroundColor: "rgba(19, 19, 19, 0.05)" }}
          className="p-6 rounded-xl"
        >
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="mt-6 space-y-4 flex-grow">
          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <p key={index} className="bg-[#1313130d] text-[#23BE0A] text-sm font-medium py-1 px-4 text-center rounded-full">
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold text-[#131313] banner-title">
            {bookName}
          </h2>
          <p className="text-[#131313cc] font-medium text-sm">By : {author}</p>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center text-xs font-medium text-[#131313cc]">
          <p>{category}</p>
          <p className="text-[#131313cc]">
            {rating}
            <span>
              <i class="fa-regular fa-star ml-2"></i>
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
