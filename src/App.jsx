import './App.css'
import { ROUTES } from './const.js';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import TopPage from './pages/TopPage.jsx';
import QuestionPage from './pages/QuestionPage.jsx';
import ResultPage from './pages/ResultPage.jsx';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.TOP} element={<TopPage />} />
      <Route path={ROUTES.QUESTION} element={<QuestionPage />} />
      <Route path={ROUTES.RESULT} element={<ResultPage />} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
