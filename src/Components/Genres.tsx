import React, { useState, FC } from 'react'
import { useCookies } from "react-cookie";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


interface myProps {

}

const Genres: FC<myProps> = () => {
    const [cookies, setCookie] = useCookies(['color-scheme']);
    const [nextId, setNextId] = useState(1)


    return (
        <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-900 text-white' : 'bg-gray-200 text-black'} ${screen.width <= 767 ? 'hidden' : 'block'} md:w-full w-full md:h-16 mt-24  md:mt-24 px-7 z-50 fixed flex gap-5 justify-center items-center `}>
            <a href={`#${nextId}`} onClick={() => { nextId > 1 ? setNextId(nextId - 1) : setNextId(1) }} className='text-2xl'> <AiOutlineArrowLeft /></a>
            <div className='overflow-hidden w-full h-9 flex gap-5 items-center rounded-2xl pl-2 scroll-smooth'>
                <div id='1' className='flex gap-5 cursor-pointer '>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}> Action</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Adventure</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Animation</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Comedy</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Crime</p>
                </div>
                <div id='2' className='flex gap-5 cursor-pointer'>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Documentary</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Drama</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Family</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Fantasy</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>History</p>
                </div>
                <div id='3' className='flex gap-5 justify-center items-center cursor-pointer'>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Horror</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Music</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Mystery</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Romance</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Science Fiction</p>
                </div>
                <div id='4' className='flex gap-5 justify-center items-center cursor-pointer'>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Thriller</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}> TV Movie</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>War</p>
                    <p className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-blue-700 text-white'} rounded-full flex justify-center px-4 h-fit w-48`}>Western</p>
                </div>
            </div>
            <a href={`#${nextId}`} onClick={() => { nextId < 4 ? setNextId(nextId + 1) : setNextId(4) }} className='text-2xl'> <AiOutlineArrowRight /> </a>
        </div>
    )
}

export default Genres
