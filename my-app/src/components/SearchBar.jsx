import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useOnLoad from '../hooks/useOnLoad';

const SearchBar = () => {
    const dispatch = useDispatch()
    
    let [toProcess, setToProcess] = useOnLoad('searchBar');

    useEffect(() => {
        console.log(toProcess)
        toProcess = setToProcess({objValue: "Hello"})
        console.log(toProcess)
    }, []);

    return (
        <form>
            <h1>Search</h1>
            <input type="text" onChange={(e) => dispatch({type: 'FETCH_SEARCH', payload: e.target.value})}/>
        </form>
    );
}

export default SearchBar;