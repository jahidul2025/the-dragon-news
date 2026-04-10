import React from 'react';
import swimming from '../../assets/swimming.png'
import classimage from '../../assets/class.png'
import playground from '../../assets/playground.png'


const RightQzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classimage} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default RightQzone;