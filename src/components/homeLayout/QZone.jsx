import React from 'react';
import SwimingImage from '../../assets/SwimingImage'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className=''>
                <img src={SwimingImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;