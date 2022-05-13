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
      <div>
        <Input
          value={ cardName }
          onChange={ onInputChange }
          nome="Nome"
          tipo="text"
          atr="name"
        />
        <Textarea
          value={ cardDescription }
          onChange={ onInputChange }
          nome="Descrição"
          atr="description"
        />
        <Input
          value={ cardAttr1 }
          onChange={ onInputChange }
          nome="Attr01"
          tipo="number"
          atr="attr1"
        />
        <Input
          value={ cardAttr2 }
          onChange={ onInputChange }
          nome="Attr02"
          tipo="number"
          atr="attr2"
        />
        <Input
          value={ cardAttr3 }
          onChange={ onInputChange }
          nome="Attr03"
          tipo="number"
          atr="attr3"
        />
        <Input
          value={ cardImage }
          onChange={ onInputChange }
          nome="Imagem"
          tipo="text"
          atr="image"
        />
        <InputSelect
          value={ cardRare }
          onChange={ onInputChange }
          nome="Raridade"
          atr="rare"
        />
        <Checkbox
          checked={ cardTrunfo }
          onChange={ onInputChange }
          nome="Super Trybe Trunfo"
          atr="trunfo"
        />
        <Button
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
