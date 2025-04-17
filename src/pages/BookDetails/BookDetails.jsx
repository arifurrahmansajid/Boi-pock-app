import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { image } = singleBook;

  const handleMarkAsRead = id => {
    // Show a toast notification
    toast.success("Book added to your read list!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Add the book to the stored DB
    addToStoredDB(id);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-12 mt-8 lg:mt-16 mb-8 lg:mb-16 mx-4 lg:mx-8">
      {/* Image Section */}
      <div className="lg:w-[350px] lg:h-[500px] w-full h-auto flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={image}
          alt={singleBook.bookName}
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h2 className="font-bold text-[36px] lg:text-[40px] mb-4">{singleBook.bookName}</h2>
        <p className="text-[#424242] text-lg lg:text-xl font-medium mb-2">
          <span className="font-semibold">By:</span> {singleBook.author}
        </p>
        <p className="text-[#424242] text-lg lg:text-xl font-medium mb-4">
          <span className="font-semibold">Category:</span> {singleBook.category}
        </p>
        <hr className="my-6" />
        <p className="text-[#424242] leading-[26px] mb-6">
          <span className="text-black font-bold">Review:</span> {singleBook.review}
        </p>
        <p className="space-x-4 mb-6">
          <span className="font-bold leading-[26px]">Tags:</span>
          {singleBook.tags.map((tag, index) => (
            <a key={index} className="text-[#23BE0A] font-medium">#{tag}</a>
          ))}
        </p>
        <hr className="my-6" />
        <div className="flex lg:gap-16 gap-4 leading-[38px] mb-6">
          <div className="text-[#424242]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold">
            <p>{singleBook.totalPages}</p>
            <p>{singleBook.publisher}</p>
            <p>{singleBook.yearOfPublishing}</p>
            <p>{singleBook.rating}</p>
          </div>
        </div>
        <ToastContainer /> {/* Toast container to display notifications */}
        <div className="space-x-4 mt-7 flex justify-center lg:justify-start">
          <button
            onClick={() => handleMarkAsRead(bookId)} // Pass the bookId to the handler
            className="btn border-2 text-lg font-semibold bg-white border-gray-300 px-5 py-2 rounded-md shadow-sm"
          >
            Read Books
          </button>
          <button
            className="btn border-2 text-white text-lg font-semibold bg-[#50b1c9] border-[#50b1c9] px-5 py-2 rounded-md shadow-sm"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;