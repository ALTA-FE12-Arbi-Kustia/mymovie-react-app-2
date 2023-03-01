import { useSelector } from "react-redux"
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import noData from '../assets/noData.png'
import Card from '../Components/Card'
import { FavoriteSlice, FavoriteState } from '../Feature/FavoriteSlice'




const Favorite = () => {
    const navigate = useNavigate();
    const [dataFavoriteMovie, setDataFavoriteMovie] = useState<any>([])
    const favorite = useSelector((state: { favorite: FavoriteState }) => state.favorite)

    useEffect(() => {
        const data: any = localStorage.getItem('dataFav')
        setDataFavoriteMovie(JSON.parse(data))
    }, [])


    const handleDetail = (id: any) => {
        navigate(`/Detail/${id}`, {
            state: {
                id: id,
            },
        });
    }

    return (
        <div className="pt-32 px-10 h- flex felx-row flex-wrap gap-5">
            {dataFavoriteMovie ?
                <div className="h-screen flex felex-row gap-5">
                    {dataFavoriteMovie?.map((item: any, index: any) => {
                        return (
                            <Card
                                key={index}
                                img={item.img}
                                desc={item.desc}
                                rate={item.rate}
                                title={item.title}
                                handleId={() => handleDetail(item.id)}
                                isTrue={true}
                            />
                        )
                    })}
                </div>
                : <div className='w-full h-screen flex justify-center items-center'>
                    <img className='w-auto h-56' src={noData} alt="" />
                </div>
            }
        </div>
    )
}

export default Favorite
