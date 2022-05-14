import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo,
    onInputChange: (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value }, () => {
        this.state.isSaveButtonDisabled
      },);
    },
    isSaveButtonDisabled: () => {
      const validation = [this.handleValidationInput(), this. handleValidationAttr()].some((item) => item!=false);
      return validation;
    },
    onSaveButtonClick: () => {
      console.log('click');
    }
  }

  handleValidationInput = () => {
     const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
      } = this.state;
     const validation = [cardName, cardDescription, cardImage, cardRare].some((item) => !item.length);
      return validation;
  }

  handleValidationAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valores = [parseInt(cardAttr1), parseInt(cardAttr2), parseInt(cardAttr3)];
    const maxValor = valores.every((valor) => valor < 91 && valor > -1);
    const soma = valores.reduce((soma, valor) => soma + valor);
    if (maxValor === true && soma <= 210) {
      return false
    } else {
    return true
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.state;
    return (
      <div className="container-form-visual">
        <div className="form">
          <h1>Adicionar nova Carta</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick= { onSaveButtonClick }
          />
        </div>
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardDescription={ cardDescription }
        />
      </div>
    );
  }
}

export default App;
