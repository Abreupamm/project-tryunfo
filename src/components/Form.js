import React from 'react';
import PropTypes from 'prop-types';
import Input from './inputs/Input';
import InputSelect from './inputs/InputSelect';
import Checkbox from './inputs/Checkbox';
import Button from './inputs/Button';
import Textarea from './inputs/Textarea';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="container-form">
        <Input
          name="cardName"
          classe="nome"
          value={ cardName }
          onChange={ onInputChange }
          nome="Nome"
          tipo="text"
          atr="name"
        />
        <Textarea
          name="cardDescription"
          classe="nome"
          value={ cardDescription }
          onChange={ onInputChange }
          nome="Descrição"
          atr="description"
        />
        <Input
          name="cardAttr1"
          classe="attr"
          value={ cardAttr1 }
          onChange={ onInputChange }
          nome="Attr01"
          tipo="number"
          atr="attr1"
        />
        <Input
          name="cardAttr2"
          classe="attr"
          value={ cardAttr2 }
          onChange={ onInputChange }
          nome="Attr02"
          tipo="number"
          atr="attr2"
        />
        <Input
          name="cardAttr3"
          classe="attr"
          value={ cardAttr3 }
          onChange={ onInputChange }
          nome="Attr03"
          tipo="number"
          atr="attr3"
        />
        <Input
          name="cardImage"
          classe="image"
          value={ cardImage }
          onChange={ onInputChange }
          nome="Imagem"
          tipo="text"
          atr="image"
        />
        <InputSelect
          name="cardRare"
          classe="rare"
          value={ cardRare }
          onChange={ onInputChange }
          nome="Raridade"
          atr="rare"
        />
        <Checkbox
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          nome="Super Trybe Trunfo"
          atr="trunfo"
        />
        <Button
          classe="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          nome="Salvar"
          atr="save-button"
        />
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
