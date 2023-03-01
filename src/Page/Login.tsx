import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


import welcome from '../assets/welcome.png'
import Alert from '../Components/Alert';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState<number>()
    const [alert, setAlert] = useState(false)


    const [cookies, setCookie] = useCookies();

    const getUsername = (e: string) => {
        setUsername(e)
    }
    const getPassword = (e: string) => {
        setPassword(parseInt(e))
    }

    function isAlert() {
        return new Promise(resolve => {
            setTimeout(() => {
                setAlert(false)
            }, 5000);
        });
    }



    async function handleLogin(e: any) {
        setCookie("Username", username, { path: "/" });
        setCookie("Password", password, { path: "/" });
        if (username == "" && password == null) {
            setAlert(true)
            const result = await isAlert();
        } else {
            navigate(`/${username}`, {
                state: {
                    username: username,
                },
            });
        }
    }

    return (
        <>
            <div className={`absolute top-0 z-50 w-full px-5 mt-5 duration-400 ${alert ? 'block' : 'hidden'}  `}>
                <Alert />
            </div>
            <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-gray-900 text-white' : 'bg-gray-200 text-black'} w-screen h-screen lg:h-full lg:w-full absolute z-30 flex flex-col items-center lg:flex-row lg:justify-center`}>
                <form action="" className='px-10 w-full md:w-96 md:backdrop-blur-sm lg:backdrop-blur-sm lg:bg-gray-400/20 md:bg-white/80 md:py-16 md:absolute  lg:relative mt-10  md:rounded-2xl  flex flex-col justify-center gap-3 md:gap-10 lg:gap-5 '>
                    <h1 className='text-3xl md:text-5xl font-bold text-center'> Login</h1>
                    <label className='md:text-4xl font-bold lg:text-2xl '>Username</label>
                    <input onChange={(e) => getUsername(e.target.value)} type="text" placeholder='Username' className={`${cookies['color-scheme'] == 'dark' ? 'border-white' : 'border-black'} bg-transparent md:text-3xl lg:text-xl outline-none border-b-2`} />
                    <label className='md:text-4xl font-bold lg:text-2xl'>Password</label>
                    <input onChange={(e) => getPassword(e.target.value)} type="password" placeholder='Password' className={`${cookies['color-scheme'] == 'dark' ? 'border-white' : 'border-black'} bg-transparent md:text-3xl lg:text-xl outline-none border-b-2`} />
                    <button onClick={(e) => handleLogin(e.preventDefault())} className='w-24 md:w-36 md:h-10 md:text-2xl rounded-md bg-blue-400 text-white mt-3'>Login</button>
                </form>
                <img className='w-full md:mt-auto lg:w-auto lg:h-full ' src={welcome} alt="" />
            </div>
        </>
    )
}

export default Login
