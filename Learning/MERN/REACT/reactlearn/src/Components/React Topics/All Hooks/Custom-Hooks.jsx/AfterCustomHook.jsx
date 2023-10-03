import React from "react";

// import useFetch from "./useFetch";
import useFetch from "./UseFetch";

const AfterCustomHook = () => {
  //   const data = UseFetch("https://jsonplaceholder.typicode.com/todos");

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  //   console.log(data);
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default AfterCustomHook;

/*
We have created a new file called UseFetch.js containing a function called useFetch which contains all of the logic needed to fetch our data.
We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.
Lastly, we are returning our data from our Hook.
In index.js, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.
Now we can reuse this custom Hook in any component to fetch data from any URL.
*/