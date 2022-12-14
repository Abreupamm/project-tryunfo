import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

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
    hasTrunfo: false,
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
      this.salveButton();
    },
    onDeletButtonClick: (event) => {
      const { name, trunfo } = event.target;
      const { salvaCards } = this.state;
      const filterCard = salvaCards.filter((card) => card.nome !== name);
      let result = this.setState({ salvaCards: filterCard });
      if (!trunfo) {
        result = this.setState({
          salvaCards: filterCard,
          hasTrunfo: false,
          cardTrunfo: false,
        });
      }
      return result;
    },
  };

  hasTrunfoValidation = () => {
    const { salvaCards } = this.state;
    const tryunfo = salvaCards.some((item) => item.trunfo === 'on');
    return tryunfo && this.setState({ hasTrunfo: true });
  }

  updateState = () => {
    this.setState({
      cardName: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardDescription: '',
    });
  }

  salveButton = () => {
    const {
      salvaCards,
      cardName,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardDescription,
      cardTrunfo,
    } = this.state;
    const cards = {
      nome: cardName,
      descricao: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      atts3: cardAttr3,
      imagem: cardImage,
      raridade: cardRare,
      trunfo: cardTrunfo,
    };
    salvaCards.push(cards);
    this.hasTrunfoValidation();
    this.updateState();
    this.setState({ cardTrunfo: undefined });
    // console.log('click');
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
      hasTrunfo,
      salvaCards,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onDeletButtonClick,
    } = this.state;
    return (
      <div>
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
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="container-visual">
            <h2>Pr??-visualiza????o</h2>
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
        </div>
        <CardList
          salvaCards={ salvaCards }
          onClick={ onDeletButtonClick }
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}

export default App;
