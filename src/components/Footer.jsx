import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2.2c-2.97 0-3.342.012-4.508.065-1.164.052-1.96.227-2.65.483a5.48 5.48 0 00-1.983 1.26 5.48 5.48 0 00-1.26 1.982c-.256.69-.43 1.486-.483 2.65-.053 1.167-.065 1.539-.065 4.508s.012 3.342.065 4.508c.052 1.164.227 1.96.483 2.65a5.48 5.48 0 001.26 1.983 5.48 5.48 0 001.982 1.26c.69.256 1.486.43 2.65.483 1.167.053 1.539.065 4.508.065s3.342-.012 4.508-.065c1.164-.052 1.96-.227 2.65-.483a5.48 5.48 0 001.983-1.26 5.48 5.48 0 001.26-1.983c.256-.69.43-1.486.483-2.65.053-1.167.065-1.539.065-4.508s-.012-3.342-.065-4.508c-.052-1.164-.227-1.96-.483-2.65a5.48 5.48 0 00-1.26-1.983 5.48 5.48 0 00-1.983-1.26c-.69-.256-1.486-.43-2.65-.483-1.167-.053-1.539-.065-4.508-.065zm0 1.8c2.923 0 3.279.011 4.436.063 1.075.048 1.658.218 2.046.364.518.2.888.438 1.28.83s.63.763.83 1.28c.146.388.316.971.364 2.046.052 1.157.063 1.513.063 4.436s-.011 3.279-.063 4.436c-.048 1.075-.218 1.658-.364 2.046a3.683 3.683 0 01-.83 1.28 3.683 3.683 0 01-1.28.83c-.388.146-.971.316-2.046.364-1.157.052-1.513.063-4.436.063s-3.279-.011-4.436-.063c-1.075-.048-1.658-.218-2.046-.364a3.683 3.683 0 01-1.28-.83 3.683 3.683 0 01-.83-1.28c-.146-.388-.316-.971-.364-2.046-.052-1.157-.063-1.513-.063-4.436s.011-3.279.063-4.436c.048-1.075.218-1.658.364-2.046a3.683 3.683 0 01.83-1.28 3.683 3.683 0 011.28-.83c.388-.146.971-.316 2.046-.364 1.157-.052 1.513-.063 4.436-.063zm0 3.7a5.3 5.3 0 100 10.6 5.3 5.3 0 000-10.6zm0 1.8a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.3-3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill="currentColor"/>
</svg>
</a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Bookshelfia Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
