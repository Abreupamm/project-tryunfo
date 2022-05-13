import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
  const { cardName, cardImage, cardDescription } = this.props;
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <img data-testid="image-card" src={cardImage} alt={cardName} />
        <p data-testid="description-card">{ cardDescription }</p>
      </div>
    );
  }
}

Card.propTypes = {
cardName: PropTypes.string.isRequired,
cardDescription: PropTypes.string.isRequired,
cardAttr1: PropTypes.string.isRequired,
cardAttr2: PropTypes.string.isRequired,
cardAttr3: PropTypes.string.isRequired,
cardImage: PropTypes.string.isRequired,
cardRare: PropTypes.string.isRequired,
cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
