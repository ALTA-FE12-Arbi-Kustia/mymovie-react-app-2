import React,{FC} from 'react'
import {AiFillStar } from 'react-icons/ai'


interface myProps {
    img:string;
    desc:string;
    rate:number;
    title:string
    handleId?: React.MouseEventHandler
    isTrue?: boolean
}

const Card:FC<myProps> = ({img,desc,rate,title,handleId, isTrue}) => {

    return (
        <div className='w-40 md:h-56 h-56 rounded-md shadow-2xl text-xs  cursor-pointer' onClick={handleId} >
            <img className={` rounded-md w-full md:w-full h-full md:h-full duration-500 ${isTrue ? 'hover:opacity-100' :'hover:opacity-0' }  `} src={`https://image.tmdb.org/t/p/w500${img}`} alt="" />
            <div className='w-auto md:w-auto h-full md:h-full -z-10 relative bottom-full md:bottom-full p-2 md:p-2 rounded-md flex flex-col gap-2 md:gap-5'>
                <h1 className=' font-extrabold'>{title}</h1>
                <p >{screen.width < 300 ? desc : desc.slice(1,150) + '.....'}</p>
                <label className='bg-yellow-500 w-10 h-7 flex justify-center items-center rounded gap-1 '><AiFillStar />{rate}</label>
            </div>
        </div>
    )
}

export default Card
