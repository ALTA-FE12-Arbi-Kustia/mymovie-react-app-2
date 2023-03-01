import React, { FC, useState } from 'react'
import Card from '../Components/Card'
import Carousels from '../Components/Carousels'
import VideoPlayer from '../Components/VideoPlayer'
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Genres from '../Components/Genres';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface myProps {
    getTrailer: any,
    recommended1: any,
    recommended2: any
}

const Home: FC<myProps> = ({ getTrailer, recommended1, recommended2 }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cookies, setCookie] = useCookies()


    function handleDetail(e: number) {
        navigate(`/Detail/${e}`, {
            state: {
                id: e,
            },
        });
    }


    return (
        <>
            <Genres />
            <div className='h-full w-full pt-20 md:pt-44'>
                <div className={`flex flex-row flex-wrap ${screen.width >= 740 ? 'px-7' : 'justify-center'}`}  >
                    <h1 className=' w-full text-3xl font-extrabold'>Trailer</h1>
                    {getTrailer.map((item: any, index: any) => {
                        return (
                            <div className={`${screen.width >= 740 ? 'mx-5' : 'w-full'} `} key={index}>
                                <VideoPlayer
                                    key={index}
                                    video={item.key}
                                    title={item.name}
                                    width='100%'
                                    height={screen.width >= 740 ? '100%' : '300px'}
                                />
                            </div>
                        )
                    })}
                </div>
                <h1 className=' w-full text-3xl font-extrabold py-6 px-5'>Recommended</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={screen.width <= 395 ? 2.5
                        : screen.width <= 450 ? 2.5
                            : screen.width <= 767 ? 3.5
                                : screen.width <= 1000 ? 5.5 : 7.3}
                >
                    {recommended1.map((item: any, index: number) => {
                        return (
                            <SwiperSlide className='md:ml-10 mb-16' key={index}>
                                <Card
                                    key={index}
                                    img={item.poster_path}
                                    desc={item.overview}
                                    rate={item.vote_average}
                                    title={item.title}
                                    handleId={() => handleDetail(item.id)}
                    
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={screen.width <= 395 ? 2.5
                        : screen.width <= 450 ? 2.5
                            : screen.width <= 767 ? 3.5
                                : screen.width <= 1000 ? 5.5 : 7.3}
                >
                    {recommended2.map((item: any, index: number) => {
                        return (
                            <SwiperSlide className='md:ml-10 mb-16' key={index}>
                                <Card
                                    key={index}
                                    img={item.poster_path}
                                    desc={item.overview}
                                    rate={item.vote_average}
                                    title={item.title}
                                    handleId={() => handleDetail(item.id)}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </>
    )
}

export default Home
