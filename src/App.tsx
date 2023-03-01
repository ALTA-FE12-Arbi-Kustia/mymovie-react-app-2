import axios from 'axios'
import { useState, FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";


import Navbar from './Components/Navbar'
import NavbarMd from './Components/NavbarMd'
import DetailCard from './Page/DetailCard'
import Home from './Page/Home'
import Login from './Page/Login'
import SearchMovie from './Page/SearchMovie'
import Favorite from './Page/Favorite';
import Library from './Page/Library';


const App = () => {
  const [positionScroll, setPositionScroll] = useState<boolean>(false)
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const [getTrailer, setGetTrailer] = useState([])
  const [getRecommended, setRecommended] = useState([])
  const recommended1 = getRecommended.slice(1, 10)
  const recommended2 = getRecommended.slice(11, 20)

  window.addEventListener('scroll', function handle() {
    if (window.scrollY >= 200) {
      setPositionScroll(true)
    } else if (window.scrollY <= 200) {
      setPositionScroll(false)
    }
  });

  const searchAnimation: any = () => {
    setSearchActive(true)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/297762/videos?api_key=${import.meta.env.VITE_KEY}`)
      .then((response) => setGetTrailer(response.data.results))
      .catch((err) => err)
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_KEY}`)
      .then((response) => setRecommended(response.data.results))
      .catch((err) => err)
  }, [])





  const [cookies, setCookie, removeCookie] = useCookies(['color-scheme', 'Username']);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredColorScheme = cookies['color-scheme'];

    if (preferredColorScheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, [cookies]);
  

  const darkMode = () => {
    if (isDarkMode) {
      setCookie('color-scheme', 'light');
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setCookie('color-scheme', 'dark');
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    window.location.reload()
  };





const handleLogout = () => {
  removeCookie("Username", { path: "/" });
  window.location.reload()
}




  return (

    <CookiesProvider>
      <BrowserRouter>
      <div className={`${cookies['color-scheme'] == 'dark' ? 'dark:bg-stone-900 text-white' : 'bg-gray-200 text-black'}`}>
          {screen.width > 767
            ? <NavbarMd
              positionScroll={positionScroll}
              searchAnimation={searchAnimation}
              searchActive={searchActive}
              darkMode={() => darkMode()}
              handleLogout={handleLogout}
            />

            : <Navbar
              positionScroll={positionScroll}
              searchAnimation={searchAnimation}
              searchActive={searchActive}
              darkMode={() => darkMode()}
              handleLogout={handleLogout}
            />
          }
          <Routes>
            <Route path='/' element={<Home getTrailer={getTrailer} recommended1={recommended1} recommended2={recommended2} />} />
            <Route path='/:username' element={<Home getTrailer={getTrailer} recommended1={recommended1} recommended2={recommended2} />} />
            <Route path='/Detail/:id' element={<DetailCard type={null} />} />
            <Route path='/SearchMovie/:movieName' element={<SearchMovie />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Favorite' element={<Favorite />} />
            <Route path='/Library' element={<Library />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
