import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      numbersOfCLicks: 0,
    };

    this.botao = this.botao.bind(this);
  }

  botao() {
    this.setState(({ numbersOfCLicks }) => ({
      numbersOfCLicks: numbersOfCLicks + 1,
    }), () => {
      console.log(this.paintButton(this.state.numbersOfCLicks));
    });
  }

  paintButton(num) {
    return num % 2 === 0 ? 'blue' : 'red';
  }

  render() {
    const { numbersOfCLicks } = this.state;
    return (
      <div>
        <button
          onClick={ this.botao }
          style={{ backgroundColor: this.paintButton(numbersOfCLicks) }}>
            Clicks = { numbersOfCLicks }
        </button>
      </div>
    );
  }
}

export default App;
