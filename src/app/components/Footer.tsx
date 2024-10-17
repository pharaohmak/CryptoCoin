import Image from 'next/image';
import React from 'react';
import icon1 from '../assets/icon-1.png';

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h1 className="text-primary mb-4 flex">
                                <Image className="img-fluid me-2" src={icon1} alt="CryptoCoin Logo" />
                                CryptoCoin
                            </h1>
                            <span>
                                Our platform is committed to providing you with the most reliable and up-to-date information in the world of cryptocurrency. Whether you’re a beginner or an expert, we are here to help you make informed decisions and achieve your financial goals. Join our community today and start your journey towards smarter investments.
                            </span>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mb-4">Newsletter</h5>
                            <p>Subscribe to our newsletter and never miss an update on market trends, exclusive token sales, and expert insights.</p>
                            <div className="position-relative">
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5 cursor-not-allowed" type="text" placeholder="Your email" disabled />
                                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2 cursor-not-allowed" disabled>SignUp</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>Salt Lake City, Utah, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+1 385 259-3959</p>
                            <p><i className="fa fa-envelope me-3"></i>me@findmak.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Our Services</h5>
                            <a className="btn btn-link" href="">Currency Wallet</a>
                            <a className="btn btn-link" href="">Currency Transaction</a>
                            <a className="btn btn-link" href="">Bitcoin Investment</a>
                            <a className="btn btn-link" href="">Token Sale</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Follow Us</h5>
                            <div className="d-flex pointer-events-none">
                                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 flex justify-center w-100">
                                &copy; <span className='mr-2'>COPYRIGHT</span> <a href="https://findmak.com"> FindMak</a>, All Right Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;