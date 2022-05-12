import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { nome, tipo, atr } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { nome }
          <input type={ tipo } data-testid={ `${atr}-input` } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
};

export default Input;
