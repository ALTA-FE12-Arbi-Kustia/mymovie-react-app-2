import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import Cat from '../assets/catIcon.jpg'
import Dog from '../assets/dogIcon.jpg'
import Bird from '../assets/birdIcon.jpg'

const NavbarMd = (props: any) => {
    const { positionScroll, searchAnimation, searchActive, darkMode, handleLogout } = props
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();
    const [logoutBtn, setLogoutBtn] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies<string>(['Username', 'color-scheme']);




    const searchValue = (e: any) => {
        setInputValue(e)
    }

    const enterSearch = (e: any) => {
        if (e == 'Enter') {
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
        <div >
            <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-900 text-white' : 'bg-gray-200 text-black'} w-full h-24 px-10 z-20 flex fixed top-0 flex-row justify-between items-center`}>
                <div className='flex flex-row gap-5 text-md font-semibold justify-center items-center ' >
                    <div onClick={() => goProfile()} className='cursor-pointer'>
                        <div >{cookies.Username
                            ? <>
                                <div className='bg-gray-300 rounded-full h-16 w-16 '>
                                    <img onClick={logout} className='w-full h-auto rounded-full mt-3' src={cookies.Username.length > 4 ? Cat : cookies.Username.length > 8 ? Dog : Bird} alt="" />
                                    <div onClick={handleLogout} className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700 text-white' : 'bg-gray-300 text-black'} ${logoutBtn ? 'block' : 'hidden'} absolute top-16 left-20 px-5 rounded-md`}>Log-Out</div>
                                </div>
                                <div className='text-center text-sm'>{cookies.Username}</div>
                            </>
                            : 'Signin/Signup'}
                        </div>
                    </div>
                    <div onClick={() => goLibrary()} className='cursor-pointer' >Library</div>
                    <div onClick={() => goFavorite()} className='cursor-pointer' >Favorite</div>
                    <div onClick={() => goHome()} className='cursor-pointer'>Home</div>
                </div>
                <div className={`text-2xl  flex flex-row gap-10 items-center `}>
                    <div className={`${searchActive ? 'w-56' : 'w-10'}  duration-500 overflow-hidden relative p-2 flex items-center rounded-3xl`}>
                        <FaSearch onClick={() => searchAnimation()} />
                        <input onChange={(e) => searchValue(e.target.value)} onKeyDown={(e) => enterSearch(e.key)} type="text " className={`w-48 absolute ml-9 bg-transparent outline-0 border-b-2 ${cookies['color-scheme'] == 'dark' ? 'border-white' : 'border-black'} text-sm `} />
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onClick={darkMode} />
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMd;