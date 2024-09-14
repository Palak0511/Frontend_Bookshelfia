import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 dark:bg-slate-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">

          <figure className="relative">
            <img
              src={item.image}
              alt="Books"
              className="w-full h-48 object-cover"
            />
            {item.isNew && (
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </div>
            )}
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{item.title}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline text-green-500 dark:text-green-400 border-green-500 dark:border-green-400 font-bold">
                ${item.price}
              </div>
              <div className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
