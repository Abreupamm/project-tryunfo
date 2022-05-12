import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { nome, atr, options } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>{ nome }</label>
        <select data-testid={ `${atr}-input` }>
          {
            options.map((item) => <option key={ item }>{item}</option>)
          }
        </select>
      </div>
    );
  }
}

InputSelect.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default InputSelect;
