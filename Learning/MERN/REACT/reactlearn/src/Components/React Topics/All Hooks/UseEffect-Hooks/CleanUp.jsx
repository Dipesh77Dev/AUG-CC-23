import React from "react";

const CleanUp = () => {
  const [widthCount, setWidthCount] = React.useState(window.screen.width);
  const [count, setCount] = React.useState(0);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);

    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h1>I've rendered {count} times!</h1>;
      <h2>
        Size of the window is - <span> {widthCount}</span>
      </h2>
    </div>
  );
};

export default CleanUp;
