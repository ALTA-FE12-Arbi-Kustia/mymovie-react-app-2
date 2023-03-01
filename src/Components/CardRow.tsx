import React,{FC} from 'react'


interface myProps {
    image: string
    title:string
    overview:string
    rate:number
    release:number
    Detail?:React.MouseEventHandler
}

const CardRow:FC<myProps> = (props) => {
    const {image, title, overview, rate, release,Detail} = props


    return (
        <div className='h-36 md:w-full w-full md:h-52 flex flex-row mb-10 cursor-pointer' onClick={Detail} >
            <img className='h-full md:w-44 rounded-lg' src={`https://image.tmdb.org/t/p/w500${image}`} alt='no image' />
            <div className='w-full px-3 md:px-5 flex flex-col break-word'>
                <h1 className='text-xl md:text-2xl'>{title}</h1>
                <p className='text-gray-600'>{screen.width > 767 ? overview : overview.slice(1, 50) + '.....'}</p>
                <p className='text-gray-600'>Rate : {rate}</p>
                <p className='text-gray-600'>Release : {release}</p>
            </div>
        </div>
    )
}

export default CardRow
