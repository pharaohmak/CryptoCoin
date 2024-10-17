import Image from 'next/image';
import React from 'react';

import icon3 from '../../assets/icon-3.png'
import icon4 from '../../assets/icon-4.png'
import icon5 from '../../assets/icon-5.png'
import icon6 from '../../assets/icon-6.png'
import icon7 from '../../assets/icon-7.png'
import icon8 from '../../assets/icon-8.png'

const Features = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-6">Why Us!</h1>
                        <p className="text-primary fs-5 mb-5">The Best In The crypto Industry</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon7} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Easy to Use</h5>
                                    <span>Our platform is intuitive and designed for all users, from beginners to experienced traders.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon6} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Safe & Secure</h5>
                                    <span>We prioritize your privacy and data security with robust backend integration using Firebase and secure authentication methods.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon5} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Affordable Plans</h5>
                                    <span>Enjoy our powerful tools at an affordable rate, providing value without compromising on quality.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon4} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Secure Storage</h5>
                                    <span>Your data is safely stored, leveraging cloud solutions and modern security protocols.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon3} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">Customizable Experience</h5>
                                    <span>Tailor your dashboard to your preferences, making it easy to track your favorites and stay informed.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex align-items-start">
                                <Image className="img-fluid flex-shrink-0" src={icon8} alt="" />
                                <div className="ps-4">
                                    <h5 className="mb-3">24/7 Support</h5>
                                    <span>We’re here for you around the clock, ensuring you have the help you need whenever you need it.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;