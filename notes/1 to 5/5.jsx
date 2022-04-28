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
  
//   .users {
//     text-align: center;
//     background-color: Tomato;
//     color: Black;
//     width: 500px;
//     padding: 20px;
//     margin: 20px auto;
//     border-radius: 5px solid black;
//     -webkit-border-radius: 5px solid black;
//     -moz-border-radius: 5px solid black;
//     -ms-border-radius: 5px solid black;
//     -o-border-radius: 5px solid black;
//   }
  



import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className= 'App'>
      <External></External>
    </div>
  );
}

function External(){
  
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  
  return(
    <div className='counter'>
        <h1>External API Users</h1>
        {
          users.map(user => <Users name={user.name} email={user.email}></Users>)
        }
    </div>
  );
}

function Users(props){
    return(
      <div className='users'>
          <h1>Name: {props.name}</h1>
          <h3>Email: {props.email}</h3>
      </div>
    );
}


export default App;
