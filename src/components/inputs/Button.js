import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { nome, atr, disabled, onClick } = this.props;
    return (
      <div>
        <button disabled={ disabled } onClick={ onClick } type="submit" data-testid={ atr }>{ nome }</button>
      </div>
    );
  }
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  disabled: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
