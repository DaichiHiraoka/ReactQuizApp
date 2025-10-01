import { useState ,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ROUTES } from './const.js';
import Button from './components/Button/Button.jsx';
import Display from './components/Display/Display.jsx';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Top from './pages/Top.jsx';
import Question from './pages/Question.jsx';
import Result from './pages/Result.jsx';

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
