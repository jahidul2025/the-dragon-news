import React, { use } from 'react';

const categoriesPromise = fetch('categories.json')
    .then(res => res.json())


const Categories = () => {
    // console.log(categoriesPromise);
    const categories = use(categoriesPromise)
    return (
        <div className='font-bold'>
            all categories({categories.length})
        </div>
    );
};

export default Categories;