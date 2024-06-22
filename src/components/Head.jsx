import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    const toggleHamburgerMenu = () => {
        dispatch(toggleMenu());
    };

    const getYoutubeSearchResults = async () => {
        const res = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
        const data = await res.json();
        setSuggestions(data?.[1]);
        dispatch(
            cacheResults({
                [searchQuery]: data?.[1],
            })
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getYoutubeSearchResults();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-md">
            <div className="flex col-span-1">
                <img
                    className="h-8 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                    alt="menu"
                    onClick={toggleHamburgerMenu}
                />
                <a href="/">
                    <img
                        className="h-8 mx-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                        alt="youtube-logo"
                    />
                </a>
            </div>
            <div className="col-span-10 px-10">
                <div>
                    <input
                        className="w-1/2 border border-gray-400 py-2 px-6 rounded-l-full"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e?.target?.value);
                        }}
                        onFocus={() => {
                            setShowSuggestions(true);
                        }}
                        onBlur={() => {
                            setShowSuggestions(false);
                        }}
                    />
                    <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
                        🔍
                    </button>
                </div>
                {showSuggestions && (
                    <div className="absolute bg-white py-2 px-2 mt-1 w-[32rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    className="py-2 px-2 hover:bg-gray-100"
                                >
                                    🔍 {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Head;
