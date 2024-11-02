import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = ({}) => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = () => {

  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div style={{ backgroundColor: "rgba(19, 19, 19, 0.05)" }} className="w-1/2 p-20 rounded-xl">
        <img  src={image} alt={bookName} />
      </div>
      <div className="w-1/2">
        <h2 className="card-title text-2xl font-bold text-[#131313] banner-title">
          {bookName}
        </h2>
        <p className="text-[#131313cc] font-medium text-sm mt-4 mb-6">By : {author}</p>
        <hr />
        <p className="text-[#131313cc] text-xs font-medium my-6">{category}</p>
        <hr />
        <p className="my-6 text-[#131313b3] text-base"><span className="text-[#131313] text-base font-bold">Review:</span> {review}</p>
        <div className="flex items-center gap-3 my-6">
          <span className="text-[#131313] text-base font-bold">Tag</span>
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-[#1313130d] text-[#23BE0A] text-sm font-medium py-1 px-4 text-center rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
        <hr />
        <div className="mt-6 mb-8 flex gap-14">
          <div className="text-[#131313b3] space-y-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="text-[#131313] text-base font-bold space-y-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex item-center gap-4">
          <button onClick={handleMarkAsRead} className="border px-6 py-2 rounded-lg font-semibold text-[#131313] text-lg">Mark as Read</button>
          <button className="bg-[#50B1C9] px-6 py-2 rounded-lg font-semibold text-lg text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
