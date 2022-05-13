import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { nome, atr, value, onChange } = this.props;
    return (
      <div className="area">
        <label htmlFor={ nome }>
          {nome}
        </label>
        <br />
        <textarea
          className="textarea"
          value={ value }
          onChange={ onChange }
          data-testid={ `${atr}-input` }
        />
      </div>
    );
  }
}

Textarea.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
