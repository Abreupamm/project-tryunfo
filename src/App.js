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
    salvaCards: [],
    // hasTrunfo,
    onInputChange: (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value }, () => {
        const { isSaveButtonDisabled } = this.state;
        isSaveButtonDisabled();
      });
    },
    isSaveButtonDisabled: () => {
      const validation = [
        this.handleValidationInput(),
        this.handleValidationAttr(),
      ].some((item) => item !== false);
      return validation;
    },
    onSaveButtonClick: () => {
      const {
        salvaCards,
        cardName,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardDescription,
      } = this.state;
      const cards = {
        nome: cardName,
        descricao: cardDescription,
        attr1: cardAttr1,
        attr2: cardAttr2,
        atts3: cardAttr3,
        imagem: cardImage,
        raridade: cardRare,
      };
      salvaCards.push(cards);
      this.setState({
        cardName: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: '',
        cardDescription: '',
      });
      console.log('click');
    },
  }

  handleValidationInput = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const validation = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ].some((item) => !item.length);
    return validation;
  }

  handleValidationAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valores = [
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ].map((attr) => Number(attr));
    const numberMax = 91;
    const NumberMin = -1;
    const numberSoma = 210;
    const maxVl = valores.every((valor) => valor < numberMax && valor > NumberMin);
    const soma = valores.reduce((acc, valor) => acc + valor);
    const no = false;
    const yes = true;
    const result = maxVl === true && soma <= numberSoma ? no : yes;
    return result;
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
            isSaveButtonDisabled={ isSaveButtonDisabled() }
            onSaveButtonClick={ onSaveButtonClick }
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
