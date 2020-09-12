import React from 'react';
import { useSelector } from 'react-redux';
import useOnLoad from '../hooks/useOnLoad';


const SearchResults = () => {
    let search = useSelector(state => state)

    useOnLoad('searchresults');
    
    return (
        <div>{search.searchResult.data}</div>
    );
}

export default SearchResults;