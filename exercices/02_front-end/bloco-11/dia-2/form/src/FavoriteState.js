import React from "react";

class FavoriteState extends React.Component {
  render() {
    const { propsValue, propsFunc } = this.props;

    let error = undefined
    if (propsValue.length > 12) error = 'Texto muito grande!'
    
    return(
      <label>
        Diga qual é o seu Estado favorito! Do Brasil ou do React, você que sabe!
        <textarea
          name='estadoFavorito'
          value={propsValue}
          onChange={propsFunc}
        />
        {error ? error : ''}
      </label>  
    );
  }
}

export default FavoriteState;
