import React from "react";

function Banner() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/image2.jpg')" }}
      >
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 bg-white bg-opacity-75 p-8 rounded-md shadow-lg">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Hello, welcome to{" "}
              <span className="text-green-500">Bookshelfia!!!</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-700">
              Your one-stop online bookstore. Discover a curated collection of
              timeless classics, gripping mysteries, and the latest bestsellers.
              Enjoy a seamless browsing and shopping experience with our
              user-friendly interface.
              <span className="text-green-500"> Happy reading!</span>
            </p>
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2"></div>
      </div>
    </>
  );
}

export default Banner;
