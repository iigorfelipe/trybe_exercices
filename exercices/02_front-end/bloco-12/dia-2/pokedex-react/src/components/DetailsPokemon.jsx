import React from "react";

class DetailsPokemon extends React.Component {
  constructor() {
    super();

    this.handleContainer = this.handleContainer.bind(this);
  }

  handleContainer() {
    const container = document.querySelector('.container-details');
    container.className = 'active'
  }

  render() {
    return (
      <div className="container-details">
        Detalhes
      </div>
    );
  }
}

export default DetailsPokemon;
