import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
        .then(data => {
          this.setState({ characters: data.results})
        });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div className='body'>{ characters.map((elem) => {
          return (
            <div className='container' key={elem.name}>
              <h3>{ elem.name }</h3>
              <img src={ elem.image } alt={ elem.name } />
            </div>
          )})}
        </div>
      </div>
    );
  }
}

export default App;
