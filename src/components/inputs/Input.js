import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { nome, tipo, atr, value, onChange, classe } = this.props;
    return (
      <div className={ classe }>
        <label htmlFor={ nome }>
          { nome }
          <input
            value={ value }
            onChange={ onChange }
            type={ tipo }
            data-testid={ `${atr}-input` }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classe: PropTypes.string.isRequired,
};

export default Input;
