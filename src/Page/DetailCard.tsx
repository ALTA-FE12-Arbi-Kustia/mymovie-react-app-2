import React, { FC, useEffect, useState, useContext } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { BsBookmark } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { BiShare } from 'react-icons/bi'
import VideoPlayer from '../Components/VideoPlayer';
import { useDispatch, useSelector } from "react-redux"
import { addToFavorite, Item, FavoriteState } from '../Feature/FavoriteSlice'


interface myProps {
    type: any
}

const DetailCard: FC<myProps> = (type) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const id = location.state.id
    const [resDetail, setResDetail] = useState([])
    const [keyTeaser, setKeyTeaser] = useState('')
    const [Active, aetActive] = useState(false)
    const detailMovie = []
    detailMovie.push(resDetail)
    const detailVideo: any = []
    detailVideo.push(keyTeaser.slice(0, 20))


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1aef5cdd1cc7d457b6a05c7937da23db&append_to_response=videos`)
            .then((response) => setResDetail(response.data))
            .catch((err) => err)
    }, [])


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_KEY}&append_to_response=videos`)
            .then((response) => setKeyTeaser(response.data.videos.results))
            .catch((err) => console.log(err))
    }, [])

    let key: any = []
    for (let i = 0; i < 10; i++) {
        if (detailVideo?.[0]?.[i]?.type == 'Clip') {
            key.push(detailVideo?.[0]?.[i])
            i = 10
        } else if (detailVideo?.[0]?.[i]?.type == 'Teaser') {
            key.push(detailVideo?.[0]?.[i])
            i = 10
        }
    }

    const handleFavorite = (item: any) => {
        const newItem: Item = {
            img: item.poster_path,
            desc: item.overview,
            rate: item.vote_average,
            title: item.title,
            id: item.id,
            isAdd: false
        }
        dispatch(addToFavorite(newItem))
    }


    return (
        <>
            <div className=' h-full w-full md:pt-24 p-20 md:px-7 px-5 flex flex-col gap-10 '>
                {key?.map((item: any, index: any) => {
                    return (
                        <div className='w-full md:h-full ' key={index}>
                            <VideoPlayer
                                key={index}
                                video={item.key}
                                width={screen.width >= 767 ? '' : '100%'}
                                height={screen.width >= 767 ? '500px' : '100%'}
                            />
                        </div>
                    )
                })}
                {detailMovie.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <div className={`md:w-full w-full h-66 gap-5 md:mt-10  flex flex-row ${screen.width >= 767 ? '' : 'flex-wrap'}  break-auto`}>
                                <img className='md:w-60 w-70 h-full' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                <div className=' px-2 md:px-5 flex flex-col gap-5 break-word'>
                                    <h1 className='md:text-4xl text-4xl font-bold  break-words'> {item.title}</h1>
                                    <p className='font-semibold'>Genre : {item.genres?.map((data: any, index: any) => { return data.name }).join(',')} </p>
                                    <p className='font-semibold'>popularity : {item.popularity}</p>
                                    <p className='font-semibold'>Production :  {item.production_companies?.map((data: any) => { return data.name }).join(',')} </p>
                                    <p className='font-semibold'>Language: {item.original_language}</p>
                                    <p className='font-semibold'>Release : {item.release_date} </p>
                                    <p className='font-semibold'>{item.tagline}</p>
                                    <div className='flex gap-5 text-xl'>
                                        <BiShare />
                                        <BsBookmark className='cursor-pointer' onClick={() => handleFavorite(item)} />
                                        <FiHeart />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-5 '>
                                <h1 className='text-2xl pt-10 font-bold'>About</h1>
                                <p>
                                    {item.overview}
                                </p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default DetailCard