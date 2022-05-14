import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { nome, atr, disabled, onClick, classe } = this.props;
    return (
      <div>
        <button
          className={ classe }
          disabled={ disabled }
          onClick={ onClick }
          type="button"
          data-testid={ atr }
        >
          { nome }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  disabled: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  classe: PropTypes.string.isRequired,
};

export default Button;
