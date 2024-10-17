import React from 'react';
import about from '../../assets/about.png'
import Image from 'next/image';
import LoginBtn from '../ui/ExploreBtn';

const About = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <Image className="img-fluid" src={about} alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6">About Us</h1>
                                <p className="text-primary fs-5 mb-4">A Trusted Source for Cryptocurrency Data</p>
                                <p>At our core, we prioritize transparency, accuracy, and user satisfaction. Our platform is built using cutting-edge technologies like Next.js, TypeScript, and Redux, ensuring smooth performance and real-time updates for our users.</p>
                                <p className="mb-4">Whether you’re tracking market trends or managing your portfolio, we offer a reliable and intuitive experience tailored to your needs.</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Real-time Data: Stay up-to-date with live price information for various cryptocurrencies, directly connected through the CoinCap API.</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>User-Focused Design: Our interface is designed with your convenience in mind, ensuring an easy-to-navigate experience.</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Advanced Search Capabilities: Find and track your favorite cryptocurrencies effortlessly with our optimized search feature.</span>
                                </div>
                                <LoginBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;