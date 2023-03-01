import React from 'react'

const Carousels = () => {
    return (
        <div className="carousel w-full mt-16">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1166094570/d-1' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1166094570/d-1' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1166094570/d-1' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src='https://vuclipi-a.akamaihd.net/p/cloudinary/h_494,w_1444,dpr_1.5,f_auto,c_thumb,q_auto:low/1166094570/d-1' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-transparent border-none text-3xl md:text-7xl text-white">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Carousels
