import React from 'react';
import Styled from './TextInput.style'

const TextInput = ({
  onBlur= () => {},
  onChange = () => {},
  onKeyPress = () => {},
  placeholder,
  value
}) => {
  return (
    <Styled.TextInput
      data-testid="text-input"
      onBlur={onBlur}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

export default TextInput