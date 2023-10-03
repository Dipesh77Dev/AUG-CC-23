import React from "react";

import BeforeHooks from "./BeforeHooks";
import MainUseState from "./UseState-Hooks/MainUseState";
import MainUseEffects from "./UseEffect-Hooks/MainUseEffects";
import MainUseContext from "./UseContext-Hooks/MainUseContext";
import MainUseRef from "./UseRef-Hooks/MainUseRef";
import MainUseReducer from "./UseReducer-Hooks/MainUseReducer";
import MainUseMemoCallbackHook from "./UseMemo-UseCallback-Hook/MainUseMemoCallbackHook";
import MainCustomHook from "./Custom-Hooks.jsx/MainCustomHook";

const HooksAll = () => {
  return (
    <>
      {/* <BeforeHooks /> */}
        <MainUseState />
        <MainUseEffects />
        <MainUseContext />
        <MainUseRef />
        <MainUseReducer />
        <MainUseMemoCallbackHook />
        <MainCustomHook />
    </>
  );
};

export default HooksAll;
