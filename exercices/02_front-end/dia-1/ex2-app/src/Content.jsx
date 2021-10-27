import React from 'react';

const arr = [
  {
    name: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    name: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    name: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    name: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        {arr.map((elem) => (
          <div key={elem.name} className='card'>
            <h4>{`O conteudo é: ${elem.name}`}</h4>
            <p>{`status: ${elem.status}`}</p>
            <p>{`bloco: ${elem.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;