import { useState, useEffect } from "react";

const useFetch = (url, initialState, option) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getData() {
    setLoading(true);
    fetch(url, option)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })

      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
