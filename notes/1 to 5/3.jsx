import './App.css';

function App() {
  const cinemas = [
    {flim: 'Majhi', hero: 'kober'},
    {flim: 'nouka', hero: 'Rubel'},
    {flim: 'Cheka', hero: 'Bappa'}];
    
  return (
    <div className= 'App'>
    
      {cinemas.map(cinemas => <Cinema flim={cinemas.flim} hero={cinemas.hero}></Cinema>)}

    </div>
  );
}


function Cinema(props){
  const stylePerson = {
    textAlign: 'center',
    backgroundColor: 'Tomato',
    color: 'Black',
    boaderRadius: '5px solid Black',
    width: '500px',
    padding: '20px',
    margin: '20px auto'
  }
  return(
    <div style={stylePerson}>
      <h1>Flim: {props.flim}</h1>
      <h3>Hero: {props.hero}</h3>
    </div>
  );
}

export default App;
