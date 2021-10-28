import React from 'react'; 

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((elem) => Task(elem)) }</ul>
    )
  }
}

export default App;
