import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { nome, atr, checked, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>{ nome }</label>
        <select value={ checked } onChange={ onChange } data-testid={ `${atr}-input` }>
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
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelect;
