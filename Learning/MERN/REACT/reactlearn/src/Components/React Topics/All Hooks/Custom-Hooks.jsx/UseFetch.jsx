import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  //   console.log(data)

  return [data];
};

export default useFetch;

// The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.
