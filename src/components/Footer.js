import React from "react";
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="footer-links">
                <Link to="/" className="footer-link scroll-link"> Home </Link>
                <Link to="/about" className="footer-link scroll-link"> About </Link>
                <Link to="/products" className="footer-link scroll-link"> Products </Link>
                {/* <Link to="/restaurant" className="footer-link scroll-link"> Restaurnt </Link> */}

            </div>
            <div className="footer-icons">
                <a href="https://www.facebook.com" target="_blank" className="footer-icon">
                    <FaFacebook />
                </a>

                <a href="https://www.instagram.com" target="_blank" className="footer-icon">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com" target="_blank" className="footer-icon">
                    <FaYoutube />
                </a>
            </div>
            <p className="copyright">
                copyright &copy;  <a href="https://sto-portfolio.netlify.app/" target="_blank"> Stoyan Spasov </a>

                .all right reserved
            </p>
        </footer>
    )
}