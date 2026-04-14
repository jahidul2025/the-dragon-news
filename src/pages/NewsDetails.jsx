import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import Navbar from '../components/Navbar';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news)
    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    }, [id, data]);
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-bold mt-3 mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;