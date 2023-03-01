import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';


import { FaSearch, FaHistory } from 'react-icons/fa'
import { AiTwotoneHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Cat from '../assets/catIcon.jpg'
import Dog from '../assets/dogIcon.jpg'
import Bird from '../assets/birdIcon.jpg'


const Navbar = (props: any) => {
    const { positionScroll, searchAnimation, searchActive, darkMode, handleLogout } = props
    const [cookies, setCookie, removeCookie] = useCookies<string>(['Username', 'color-scheme']);
    const [logoutBtn, setLogoutBtn] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();

    const searchValue = (e: any) => {
        setInputValue(e)
    }

    const enterSearch = (e: any) => {
        if (e == 'Enter') {
            console.log('ok')
            navigate(`/SearchMovie/${inputValue}`, {
                state: {
                    movieName: inputValue
                }
            })
        }
    }


    const goHome = () => {
        navigate(`/${cookies.Username ? cookies.Username : ''}`);
    }

    const goProfile = () => {
        navigate(cookies.Username ? '' : '/Login');
    }

    const goFavorite = () => {
        navigate(cookies.Username ? '/Favorite' : '/Login');
    }

    const goLibrary = () => {
        navigate(cookies.Username ? '/Library' : '/Login');
    }

    const logout = () => {
        setLogoutBtn(!logoutBtn)
    }

    return (
        <>
            <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-900 text-white' : 'bg-gray-200 text-black'} w-full h-16 px-5  z-20 top-0 fixed duration-500 flex flex-row justify-between items-center gap-5`}>
                <div className='text-3xl' >
                    <AiOutlineSetting onClick={logout} />
                    <div onClick={handleLogout} className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-gray-300 text-black'} ${logoutBtn ? 'block' : 'hidden'} absolute top-10 left-10 text-sm px-5 rounded-md`}>Log-Out</div>
                </div>
                <div className='flex flex-row gap-5 justify-center'>
                    <div className={`${searchActive ? 'w-40' : 'w-10'} duration-500 text-2xl overflow-hidden relative p-2 flex items-center rounded-3xl`}>
                        <FaSearch onClick={() => searchAnimation()} />
                        <input onChange={(e) => searchValue(e.target.value)} onKeyDown={(e) => enterSearch(e.key)} type="text" className='w-44 absolute ml-9 bg-transparent outline-0 border-b-2 border-black text-base' />
                    </div>
                    <div className='flex flex-row gap-2 items-center mt-2'>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onClick={darkMode} />
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-900 text-white' : 'bg-gray-200 text-black'} w-full h-24 bottom-0 z-50 px-10 fixed flex flex-row gap-5 justify-between items-center`}>
                <div className='flex flex-col items-center' onClick={() => goHome()}>
                    <div>
                        <AiTwotoneHome className='text-2xl' />
                    </div>
                    <label className='text-xs'>Home</label>
                </div>
                <div className='flex flex-col items-center' onClick={() => goFavorite()}>
                    <MdFavorite className='text-2xl' />
                    <label className='text-xs'>Favorite</label>
                </div>
                <div className='flex flex-col items-center' onClick={() => goLibrary()}>
                    <FaHistory className='text-2xl' />
                    <label className='text-xs'>Library</label>
                </div>
                <div className='flex flex-col items-center' onClick={() => goProfile()}>
                    <div >{cookies.Username
                        ?
                        <div className='flex flex-col justify-center items-center'>
                            <div className=' rounded-full h-9 w-9  '>
                                <img className='w-full h-auto rounded-full' src={cookies.Username.length > 4 ? Cat : cookies.Username.length > 8 ? Dog : Bird} alt="" />
                            </div>
                            <div className='text-center text-sm'>{cookies.Username}</div>
                        </div>
                        : <div className='flex flex-col justify-center items-center'>
                            <AiOutlineUser className='text-2xl' />
                            <label className='text-xs'>profile</label>
                        </div>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
