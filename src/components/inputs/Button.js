import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { nome, atr, disabled, onClick, classe, name } = this.props;
    return (
      <div>
        <button
          className={ classe }
          disabled={ disabled }
          onClick={ onClick }
          type="button"
          data-testid={ atr }
          name={ name }
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
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  classe: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
