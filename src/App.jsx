import { useState ,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ROUTES } from './const.js';
import Button from './components/Button/Button.jsx';
import Display from './components/Display/Display.jsx';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Top from './pages/TopPage.jsx';
import Question from './pages/QuestionPage.jsx';
import Result from './pages/ResultPage.jsx';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.TOP} element={<Top />} />
      <Route path={ROUTES.QUESTION} element={<Question />} />
      <Route path={ROUTES.RESULT} element={<Result />} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
