import React from 'react'

import "./Forms/Form.css";

import ExpressLiteral from './ExpressLiteral'
import CSS from './CSS'
import Component from './Component'
import MainConditionalRendering from './Conditional Rendering/MainConditionalRendering'
import MainHook from './Hooks/MainHook'
import Events from './Events'
import MainForms from './Forms/MainForms'
import SpreadOperator from './SpreadOperator';
import MainCssIcon from './Material UI & Bootstrap/MainCssIcon';

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
    </>
  )
}

export default MainTopics