import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold'>Find us on</h1>
            <div className=''>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebook />Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"> <FaXTwitter /></button>
                    <button className="btn bg-base-100 justify-start join-item"> <FaSquareInstagram />instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;