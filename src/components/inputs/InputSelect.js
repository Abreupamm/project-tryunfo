import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { nome, atr, value, onChange, classe, name } = this.props;
    return (
      <div className={ classe }>
        <label htmlFor={ nome }>{ nome }</label>
        <select
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ `${atr}-input` }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </div>
    );
  }
}

InputSelect.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classe: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputSelect;
