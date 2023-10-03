import AfterCustomHook from "./AfterCustomHook";
import BeforeCustomHook from "./BeforeCustomHook";

const MainCustomHook = () => {
  return (
    <div>
      <BeforeCustomHook />
      <AfterCustomHook />
    </div>
  );
};

export default MainCustomHook;
