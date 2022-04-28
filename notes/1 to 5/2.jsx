import './App.css';

function App() {

  const nayko = ['Rubel', 'Bappa', 'Salman'];
  return (
    <div className= 'App'>
      <Person name={nayko[0]}></Person>
    </div>
  );
}

function Person(props){
  const stylePerson = {
    textAlign: 'center',
    backgroundColor: 'Tomato',
    color: 'Black',
    boaderRadius: '5px solid Black',
    width: '500px',
    padding: '20px',
    margin: '0 auto'
  }
  
  return(
    <div style={stylePerson}>
      <h1>Nayok: {props.name}</h1>
      <h3>Nayka: </h3>
    </div>
  );
}

export default App;
