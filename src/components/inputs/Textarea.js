import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { nome, atr, value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          {nome}
        </label>
        <br />
        <textarea
          name={ name }
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
  name: PropTypes.string.isRequired,
};

export default Textarea;
