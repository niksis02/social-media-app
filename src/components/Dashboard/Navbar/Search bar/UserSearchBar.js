import { useState, useRef, useMemo } from 'react';

import search from '../../../../Assets/Pictures/search.svg';

import SearchResult from './SearchResult/SearchResult';
import useSearchFetch from '../../../../Hooks/useSearchFetch';
import useClickChecker from '../../../../Hooks/useClickChecker';

import './UserSearchBar.css'

const UserSearchBar = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [query, setQuery] = useState('');

    const body = useMemo(() => ({query}), [query]);

    const {data, loading, error, setPage, pageHandler} = useSearchFetch('http://localhost:5000/users/search', body, 'post');

    const searchResultRef = useRef(null);
    const searchBarRef = useRef(null);

    const { outside, setOutside } = useClickChecker(searchResultRef, searchBarRef);

    const handleSearchFocus = () => {
        setIsSearchFocused(!isSearchFocused);
        setOutside(false);
    }
    const handleQuery = e => {
        setQuery(e.target.value);
        setOutside(false);
        setPage(0);
    }

    return ( 
        <label className="search">
            {
                !isSearchFocused ? <img src={search} alt="N" /> : null
            }
            <input 
                type="text" 
                placeholder="Search..." 
                className="searchBar" 
                value={query}
                onChange={handleQuery}
                onFocus={handleSearchFocus} 
                onBlur={() => {setIsSearchFocused(!isSearchFocused)}}
                ref={searchBarRef}
            />
            {data.length !== 0 && !outside && 
            <SearchResult 
                ref={searchResultRef}
                data={data} 
                loading={loading}
                error={error}
                pageHandler={pageHandler}
                setOutside={setOutside}
            />}
        </label>
     );
}
 
export default UserSearchBar;