import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';  // react-bootstrap


// why React =>
// import main from './Components/Why React/main';
import Main from './Components/Why React/main';


// Topics =>
import MainTopics from './Components/React Topics/MainTopics';


// Challenges =>
import MainChallenges from './Components/Challenges/MainChallenges';


// Mini Projects =>
import MainMiniProj from './Components/Mini Projects/MainMiniProj';



function App() {

  return (
    <>
      {/* 1] Why React ==> */}
      {/* <main /> */}
      {/* <Main /> */}


      {/* 2] Topics ==> */}
      <MainTopics />


      {/* 3] Challenges ==> */}
      <MainChallenges />


      {/* 4] Mini Projects ==> */}
      <MainMiniProj />
    </>
  )
}

export default App
