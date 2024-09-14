import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url('/image3.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative container mx-auto py-20 px-4 z-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg leading-relaxed mb-4">
            We'd love to hear from you! Whether you have a question about our collection,
            need assistance with something, or just want to share your thoughts, feel free
            to reach out to us.
          </p>
          <p className="text-lg leading-relaxed">
            Email: support@bookshelfia.com <br />
            Phone: +1 (234) 567-890 <br />
            Address: 1234 Book Street, Reading City, RC 56789
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
