import React from 'react';
import useFetch from './useFetch';

const FetchedData = ( {apiUrl} ) => {
  const { data, loading, error } = useFetch(apiUrl);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!data) {
    return <h1>No Data Found</h1>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FetchedData;


