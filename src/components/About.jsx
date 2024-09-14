import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 text-white pt-24 pb-20">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="/bookshelfia.png"
            alt="Bookshelfia Logo"
            className="h-40 w-40 md:h-56 md:w-56 shadow-lg rounded-full border-4 border-white"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Bookshelfia
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Welcome to Bookshelfia! Our mission is to bring you an exceptional
            range of books to satisfy every literary craving. From cherished
            classics that have stood the test of time to the latest in modern
            literature, our collection is curated with care to offer the very
            best. Whether you are an avid reader, a student, or simply seeking
            a good book to unwind, Bookshelfia is your go-to destination.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Dive into our extensive selection of genres including fiction,
            non-fiction, biographies, science fiction, fantasy, and more. Our
            user-friendly platform ensures that you can effortlessly browse and
            find exactly what you're looking for. With Bookshelfia, every book
            is just a click away, making your reading journey as enjoyable and
            seamless as possible.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            At Bookshelfia, we believe that a great book can change lives, spark
            imaginations, and broaden horizons. Our dedicated team is always on
            the lookout for new and exciting titles to keep our collection fresh
            and engaging. Join us in celebrating the joy of reading and find
            your next great adventure with Bookshelfia today.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Thank you for visiting Bookshelfia. We are thrilled to have you here
            and look forward to helping you discover your next favorite book.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
