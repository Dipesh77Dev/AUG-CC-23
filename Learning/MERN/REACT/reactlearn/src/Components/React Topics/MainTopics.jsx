import React from 'react'

import "./Forms/Form.css";

import ExpressLiteral from './Basics/ExpressLiteral'
import CSS from './Basics/CSS'
import Component from './Basics/Component'
import MainConditionalRendering from './Conditional Rendering/MainConditionalRendering'
import MainHook from './Hooks/MainHook'
import Events from './Basics/Events'
import MainForms from './Forms/MainForms'
import SpreadOperator from './Basics/SpreadOperator';
import MainCssIcon from './Material UI & Bootstrap/MainCssIcon';
import HooksAll from './All Hooks/HooksAll';

const MainTopics = () => {
  return (
    <>
      {/* <ExpressLiteral /> */}
      {/* <CSS /> */}
      {/* <Component /> */}
      {/* <MainConditionalRendering /> */}
      <MainHook />
      {/* <Events /> */}
      <MainForms />
      {/* <SpreadOperator /> */}
      <MainCssIcon />
      <HooksAll />
    </>
  )
}

export default MainTopics