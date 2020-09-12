import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const App = () => {
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <SearchResults />
            </div>
        </div>
    );
}

export default App;