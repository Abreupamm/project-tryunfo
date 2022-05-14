import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  handleonInputChange = (event) => {
         const { value, name } = event.target;
         this.setState({ [name]: value});
}
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
       onInputChange: this.handleonInputChange,
      // isSaveButtonDisabled,
      // onSaveButtonClick,
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
      onInputChange
    } = this.state;
    console.log();
    return (
      <div className="container-form-visual"  >
        <div className="form" >
        <h1>Adicionar nova Carta</h1>
          <Form
            cardName={cardName}
            cardDescription={cardDescription}
            cardImage={cardImage}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardRare={cardRare}
            onInputChange={onInputChange} />
        </div>
        <Card
          cardName={cardName}
          cardImage={cardImage}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardRare={cardRare}
          cardDescription={cardDescription}
        />
      </div>
    );
  }
}

export default App;
