import React from "react";
import './Form.css';

class Form extends React.Component {
  render() {
    return(
      <form>
        <fieldset>
          <legend>Dados Pessoas</legend>

          <label>Nome</label>
          <input type='text' maxLength='40' required/>

          <label>Email</label>
          <input type='text' maxLength='50' required/>

          <label>Endereço</label>
          <input type='text' maxLength='200' required/>

          <label>Cidade</label>
          <input type='text' maxLength='28' required/>

          <label>Estado</label>
          <select required>
            <option>Selecione o Estado</option>
          </select>

          <label>Tipo</label>
          <input type='radio' required/><span>Casa</span>
          <input type='radio' required/><span>Apartamento</span>
        </fieldset>
        
        <fieldset>
          <legend>Dados do último emprego</legend>

          <label>Resumo do cúrriculo</label>
          <textarea maxLength='1000' required />

          <label>Cargo</label>
          <textarea maxLength='40' required />

          <label>Descrição do cargo</label>
          <input maxLength='500' required />
        </fieldset>
      </form>
    );
  }
}

export default Form;
