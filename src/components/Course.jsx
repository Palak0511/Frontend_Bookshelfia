import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const render_ips = ['52.41.36.82',
    '54.191.253.12',
    '44.226.122.3']
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://backend-bookshelfia-rasp.onrender.com/api/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 transition-all duration-300 ease-in-out">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you Here{" "}
            <span className="text-green-500"> :)</span>
          </h1>
          <p className="mt-12">
          We are delighted you are here at Bookshelfia! Your passion for reading is something we truly value, and we're thrilled to offer you a special section filled with more books, curated exclusively for our enrolled members. Here, you'll find a wider selection of genres, rare finds, and personalized recommendations tailored just for you. This is our way of saying thank you for being part of our reading community. Dive into your next great read, and enjoy the privilege of accessing these exclusive titles.
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-800 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
