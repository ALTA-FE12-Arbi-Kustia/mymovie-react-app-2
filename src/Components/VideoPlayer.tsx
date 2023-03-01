import React,{FC} from 'react'
import ReactPlayer from 'react-player'
import { useCookies } from "react-cookie";


interface myProps {
    title?:string;
    video:any;
    width:any;
    height:string;
}

const VideoPlayer:FC<myProps> = (props) => {
    const {title, video, width, height} = props
    const [cookies, setCookie] = useCookies(['color-scheme']);

    return (
            <div className='flex flex-col my-7 cursor-pointer gap-3 '>
                <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-600' : 'bg-gray-300'} rounded-lg overflow-hidden z-10`}>
                    <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700' : 'bg-gray-400'} absolute -z-10 mt-3 ml-5 w-52 h-6 rounded-md  `}></div>
                    <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-700' : 'bg-gray-400'} absolute -z-10 mt-14 ml-28 md:ml-16 w-28 h-16 rounded-lg `}></div>
                    <ReactPlayer controls={true} width={width} height={height} url={`http://www.youtube.com/watch?v=${video}`} />
                </div>
                <p className='flex md:w-64 font-bold ml-3 '>{title}</p>
            </div>
    )
}

export default VideoPlayer
