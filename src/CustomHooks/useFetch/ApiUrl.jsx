
import React from 'react';
import FetchedData from './FetchedData';

const FetchUrl = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
    return (
        <div>
            <FetchedData apiUrl={apiUrl} />
        </div>
    );
};

export default FetchUrl;
