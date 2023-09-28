import React, { useState, useEffect } from "react";

const Challenge11 = () => {
  const [changeTitle, setChangeTitle] = useState(0);

  const handleChangeTitle = () => {
    setChangeTitle(changeTitle + 1);
  };

  useEffect(() => {
    document.title = `You clicked me on - ${changeTitle}`;
  });

  return (
    <>
      <button onClick={handleChangeTitle}>Click - {changeTitle}</button>
    </>
  );
};

export default Challenge11;
