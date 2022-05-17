import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './inputs/Button';

class CardList extends React.Component {
  render() {
    const { salvaCards, onClick, hasTrunfo } = this.props;
    return (
      <div>
        <h2>Todas as Cartas</h2>
        <div className="container-cardlist">
          {
            salvaCards && (
              salvaCards.map((card) => {
                const {
                  nome,
                  imagem,
                  attr1,
                  attr2,
                  attr3,
                  descricao,
                  raridade,
                  trunfo,
                } = card;
                return (
                  <div key={ nome } className="card">
                    <Card
                      cardName={ nome }
                      cardImage={ imagem }
                      cardAttr1={ attr1 }
                      cardAttr2={ attr2 }
                      ardAttr3={ attr3 }
                      cardRare={ raridade }
                      cardTrunfo={ trunfo }
                      cardDescription={ descricao }
                    />
                    <Button
                      Key={ nome }
                      name={ nome }
                      nome="Excluir"
                      atr="delete-button"
                      onClick={ onClick }
                      disabled={ false }
                      classe="button"
                      hasTrunfo={ hasTrunfo }
                    />
                  </div>
                );
              })
            )
          }
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  salvaCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default CardList;
