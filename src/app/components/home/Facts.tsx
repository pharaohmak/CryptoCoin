import React from 'react';
import icon2 from '../../assets/icon-2.png';
import icon9 from '../../assets/icon-9.png';
import icon10 from '../../assets/icon-10.png';
import Image from 'next/image';

const Facts = () => {
    return (
        <>
            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                            <Image className="img-fluid mb-4" src={icon9} alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Today Transactions</p>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
                            <Image className="img-fluid mb-4" src={icon10} alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
                            <Image className="img-fluid mb-4" src={icon2} alt="" />
                            <h1 className="display-4" data-toggle="counter-up">123456</h1>
                            <p className="fs-5 text-primary mb-0">Total Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facts;