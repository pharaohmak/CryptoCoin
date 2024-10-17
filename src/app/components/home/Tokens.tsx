import React from 'react';
import LoginBtn from '../ui/ExploreBtn';

import payment1 from '../../assets/payment-1.png';
import payment2 from '../../assets/payment-2.png';
import payment3 from '../../assets/payment-3.png';
import payment4 from '../../assets/payment-4.png';
import Image from 'next/image';

const Tokens = () => {
    return (
        <>
            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-6">Token Sale</h1>
                        <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Days</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Hours</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Minutes</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Seconds</span>
                            </div>
                        </div>
                        <div className="col-12 text-center py-4">
                            <LoginBtn />
                        </div>
                        <div className="col-12 text-center accepted">
                            <Image className="img-fluid m-1 accepted-icon" src={payment1} alt="" />
                            <Image className="img-fluid m-1 accepted-icon" src={payment2} alt="" />
                            <Image className="img-fluid m-1 accepted-icon" src={payment3} alt="" />
                            <Image className="img-fluid m-1 accepted-icon" src={payment4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tokens;