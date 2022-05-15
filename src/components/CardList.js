import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { salvaCards } = this.props;
    return (
      <div>
        <h2>Todas as Cartas</h2>
        <div className="container-cardlist">
          {
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
                    cardAttr3={ attr3 }
                    cardRare={ raridade }
                    cardTrunfo={ trunfo }
                    cardDescription={ descricao }
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  salvaCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
