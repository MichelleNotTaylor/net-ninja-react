import {useState, useEffect} from 'react';

const useFetch = url => {
  const [data, setData] = useState (null);
  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (() => {
    setTimeout (() => {
      fetch (url)
        .then (res => {
          if (!res.ok) {
            throw Error ('Could not fetch data for that result.');
          }
          return res.json ();
        })
        .then (data => {
          setData (data);
          setIsLoading (false);
          setError (null);
        })
        .catch (err => {
          setIsLoading (false);
          setError (err.message);
        });
    }, 1000);
  }, []);

  return {data, isLoading, error};
};

export default useFetch;
