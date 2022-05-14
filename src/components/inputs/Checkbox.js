import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { nome, atr, checked, onChange, name } = this.props;
    return (
      <label htmlFor={ nome }>
        <input
          name={name}
          checked={ checked }
          onChange={ onChange }
          type="checkbox"
          data-testid={ `${atr}-input` }
        />
        { nome }
      </label>
    );
  }
}

Checkbox.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
