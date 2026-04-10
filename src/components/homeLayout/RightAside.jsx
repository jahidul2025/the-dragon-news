import React from 'react';
import SocialLogin from './socialLogin';
import FindUs from './FindUs';
import RightQzone from './RightQzone';


const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <RightQzone></RightQzone>
        </div>
    );
};

export default RightAside;