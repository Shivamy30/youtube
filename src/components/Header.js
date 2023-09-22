import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_SEARCH_BY_QUERY } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { addVideos } from '../utils/videosSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const history = useHistory();


    const getVideosData = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_SEARCH_BY_QUERY + searchQuery);
        const json = await data.json();
        dispatch(addVideos(json.items))
        console.log("redirecting to home page")
        // window.location.href='/'
        // return navigate(-1)

    }

    const cache = useSelector(store => store.search)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    const hanldeHamberClick = () => {
        dispatch(toggleMenu())
    }
    const handleInputChange=(e)=>{
        if(e.key === "Enter"){
            getVideosData();
        }
    }
    const handleSuggestionClicks = (text)=>{
        setSearchQuery(text);
        getVideosData();
        // history.push("/")
    }
    return (
        <div className='grid grid-flow-col p-3 shadow-lg justify-between fixed bg-white w-full'>
            <div className='flex col-span-1 '>
                <img className='h-8 cursor-pointer' onClick={hanldeHamberClick}
                    alt='menu'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC'>
                </img>
                <a href='/'>
                    <img className='h-8 mx-5'
                        alt='youtube-logo'
                        src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png" />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input value={searchQuery}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleInputChange}
                        className='w-1/2 border border-gray-500 p-2 rounded-l-full' type='text' />
                    <button onClick={getVideosData} className='border border-gray-500 py-2 px-5 rounded-r-full bg-gray-100'>🔍</button>
                </div>
              <div>
                  {suggestions.length > 0 && showSuggestions && <div className='fixed bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg'>
                    <ul>
                        {suggestions.map((s => (
                        <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100' onClick={()=>handleSuggestionClicks(s)} >🔍 {s}</li>

                        )))}
                    </ul>
                </div>
                }
              </div>
            </div>
            <div className='col-span-1'>
                <img className='h-8'
                    src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
                    alt='user-logo'>
                </img>

            </div>
        </div>
    )
}

export default Header