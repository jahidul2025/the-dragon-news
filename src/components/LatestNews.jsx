import React from 'react';
import Marquee from 'react-fast-marquee';
const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            {/* <Marquee pauseOnHover={true} speed={50} >
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
            </Marquee> */}
            <div className="overflow-hidden">
                <div className="whitespace-nowrap animate-marquee">
                    🚀 Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... Your scrolling text goes here... 
                </div>
            </div>

        </div>
    );
};

export default LatestNews;