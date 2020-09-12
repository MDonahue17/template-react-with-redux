import React, { useEffect } from 'react';

let useOnLoad = (toProcess) => {
    toProcess = {objValue: toProcess + " Went through Hook"};

    let setToProcess = (newToProcess) => {
        toProcess = newToProcess
        return toProcess
    }

    return [toProcess, setToProcess]
}

export default useOnLoad;