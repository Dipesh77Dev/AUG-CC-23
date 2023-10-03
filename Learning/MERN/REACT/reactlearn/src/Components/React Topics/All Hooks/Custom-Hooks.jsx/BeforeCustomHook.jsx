import { useState, useEffect } from "react";

const BeforeCustomHook = () => {
  const [data, setData] = useState(null);
  //   console.log(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id} : {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default BeforeCustomHook;
