import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { nome, atr } = this.props;
    return (
      <div>
        <button type="submit" data-testid={ atr }>{ nome }</button>
      </div>
    );
  }
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
};

export default Button;
