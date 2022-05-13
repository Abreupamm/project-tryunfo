import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { nome, atr, } = this.props;
    return (
      <label htmlFor={ nome }>
        <input type="checkbox" data-testid={ `${atr}-input` } />
        {nome}
      </label>
    );
  }
}

Checkbox.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
};

export default Checkbox;
