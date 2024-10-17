import React from 'react';
import hero1 from '@/app/assets/hero-1.png'
import Image from 'next/image';
import LoginBtn from '../ui/ExploreBtn';


const Header = () => {
    return (
        <>
            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">Make Better Life with Real-Time Crypto Insights</h1>
                            <p className="animated slideInDown">Empowering users with the latest and most accurate cryptocurrency information, our platform is designed to provide secure and reliable data. With seamless search functionality, real-time price updates, and a user-friendly interface, we help you stay informed about market trends and make confident decisions in the world of crypto.</p>
                            <LoginBtn />
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <Image className="img-fluid animated pulse infinite" src={hero1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;