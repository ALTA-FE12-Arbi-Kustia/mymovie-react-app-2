import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdImageNotSupported } from 'react-icons/md'

import axios from 'axios'
import CardRow from '../Components/CardRow'


const SearchMovie = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [dataSearchMovie, setDataSearchMovie] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_KEY}&query=${location.state.movieName}`)
            .then((response) => setDataSearchMovie(response.data.results))
            .catch((err) => err)
    }, [location])

    

    const handleDetail = (id:number) => {
        navigate(`/Detail/${id}`, {
            state: {
                id:id
            }
        })
    }

    return (
        <div className='py-20 md:py-28 px-7 md:px-16 w-full h-full flex flex-col '>
            {dataSearchMovie.map((item: any, index: any) => {
                return (
                    <>
                        <CardRow
                            key={index}
                            image={item.poster_path}
                            title={item.title}
                            overview={item.overview}
                            rate={item.vote_average}
                            release={item.release_date}
                            Detail={() => handleDetail(item.id)}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default SearchMovie
