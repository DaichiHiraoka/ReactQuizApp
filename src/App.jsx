import { useState ,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button.jsx';
import Display from './components/Display/Display.jsx';


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
        setCount(count + 1);
        
    }
  
  useEffect(() => {
    console.log(`Count:` ,count);
    if(count >= 15){
      setCount(0);
    }
  } , [count]);

  return (  
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        ボタン
      </Button>

      <Display count={count} />
    </>
  )
}

export default App
