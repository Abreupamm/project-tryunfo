import React from 'react';
import Input from './inputs/Input';
import InputSelect from './inputs/InputSelect';
import Checkbox from './inputs/Checkbox';
import Button from './inputs/Button';
import Textarea from './inputs/Textarea';
import PropTypes from 'prop-types';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    // optionsSelect = ['normal', 'raro', 'muito raro'];

    return (
      <div>
        <Input value={ cardName } onChange={ onInputChange } nome="Nome" tipo="text" atr="name" />
        <Textarea nome="Descrição" atr="description" />
        <Input nome="Attr01" tipo="number" atr="attr1" />
        <Input nome="Attr02" tipo="number" atr="attr2" />
        <Input nome="Attr03" tipo="number" atr="attr3" />
        <Input nome="Imagem" tipo="text" atr="image" />
        {/* <InputSelect nome="Raridade" atr="rare" options={this.optionsSelect} /> */}
        <Checkbox nome="Super Trybe Trunfo" atr="trunfo" />
        <Button nome="Salvar" atr="save-button" />
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
hasTrunfo: PropTypes.bool.isRequired,
isSaveButtonDisabled: PropTypes.func.isRequired,
onInputChange: PropTypes.func.isRequired,
onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;