import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
            <Link href="/landing" className="navbar-brand d-flex align-items-center">
                <h2 className="m-0 text-primary">CryptoCoin</h2>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-4 py-lg-0">
                    <Link href="/" className="nav-item nav-link active">Home</Link>
                    <Link href="/about" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                        <Link
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Resources
                        </Link>
                        <div className="dropdown-menu shadow-sm m-0">
                            <Link href="/feature" className="dropdown-item">Features</Link>
                            <Link href="/token-sale" className="dropdown-item">Token Sale</Link>
                            <Link href="/faqs" className="dropdown-item">FAQs</Link>
                        </div>
                    </div>
                    <Link href="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="h-100 d-lg-inline-flex align-items-center d-none">
                    <Link className="btn btn-square rounded-circle bg-light text-primary me-2 cursor-not-allowed" href="" aria-disabled>
                        <i className="fab fa-facebook-f cursor-not-allowed"></i>
                    </Link>
                    <Link className="btn btn-square rounded-circle bg-light text-primary me-2 cursor-not-allowed" href="" aria-disabled>
                        <i className="fab fa-twitter cursor-not-allowed"></i>
                    </Link>
                    <Link className="btn btn-square rounded-circle bg-light text-primary me-0 cursor-not-allowed" href="" aria-disabled>
                        <i className="fab fa-linkedin-in cursor-not-allowed"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;