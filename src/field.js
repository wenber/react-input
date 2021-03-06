import React, { PropTypes } from 'react';
import Label from './label';
import Input from './input';

/**
 * @class Field
 * @description A field in the form.
 */
const Field = props => (
  <div
    className={props.className `field-${props.type}`}
    style={props.style}
    id={props.id}
  >
    {props.renderBefore ? props.renderBefore() : null}
    {props.label ? (
      <Label
        name={props.name}
      />
    ) : null}
    {props.input ? (
      <Input
        {...props}
      />
    ) : null}
    {props.renderAfter ? props.renderAfter() : null}
  </div>
);


Field.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  input: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  placeholder: PropTypes.string,
  renderAfter: PropTypes.func,
  renderBefore: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string
};

Field.defaultProps = {
  className: 'form-field', // What is the field className?
  disabled: false, // Is the field disabled?
  input: true, // Is there an input?
  label: true, // Is there a label for the field?
  name: null, // What is the name of the field?
  placeholder: null, // What is the input field placholder?
  required: true, // Is the input field required?
  style: null, // What is the style of the field?
  type: 'text' // What type of input field is it?
};

export default Field;
