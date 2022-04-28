// .App {
//     margin-top: 20px;
//     text-align: center;
//     margin-bottom: 50px;
//   }
  
//   .counter {
//     text-align: center;
//     padding: 20px;
//     margin: 20px;
//   }
  
import { useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className= 'App'>
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  
  const [count, setCount] = useState(0);
  
  const handleIncrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    
    setCount(count + 1);
  }
  

  return(
    <div className='counter'>
        <h1>Counter Project</h1>
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
