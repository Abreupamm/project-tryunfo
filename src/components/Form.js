import React from 'react';
import Input from './inputs/Input';
import InputSelect from './inputs/InputSelect';
import Checkbox from './inputs/Checkbox';
import Button from './inputs/Button';
import Textarea from './inputs/Textarea';

class Form extends React.Component {
  optionsSelect = ['normal', 'raro', 'muito raro'];

  render() {
    return (
      <div>
        <Input nome="Nome" tipo="text" atr="name" />
        <Textarea nome="Descrição" atr="description" />
        <Input nome="Attr01" tipo="number" atr="attr1" />
        <Input nome="Attr02" tipo="number" atr="attr2" />
        <Input nome="Attr03" tipo="number" atr="attr3" />
        <Input nome="Imagem" tipo="text" atr="image" />
        <InputSelect nome="Raridade" atr="rare" options={ this.optionsSelect } />
        <Checkbox nome="Super Trybe Trunfo" atr="trunfo" />
        <Button nome="Salvar" atr="save-button" />
      </div>
    );
  }
}

export default Form;
