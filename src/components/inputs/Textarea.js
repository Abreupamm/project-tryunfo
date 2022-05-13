import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { nome, atr, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { nome }
          <textarea value={ value } onChange={ onChange } data-testid={ `${atr}-input` } />
        </label>
      </div>
    );
  }
}

Textarea.propTypes = {
  nome: PropTypes.string.isRequired,
  atr: PropTypes.string.isRequired,
};

export default Textarea;
