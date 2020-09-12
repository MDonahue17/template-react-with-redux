const storeSearch = (search) => {
    dispatch( 
        {
            type: 'FETCH_SEARCH',
            payload: search
        }
    )
}