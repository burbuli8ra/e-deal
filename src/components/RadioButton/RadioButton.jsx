import React from 'react';
import Styled from './RadioButton.style';

const RadioButton = ({
  children,
  label,
  onClick = () => {},
  value
}) => {
  return (
    <Styled.RadioButton isChecked={label === value} onClick={onClick}>
      <Styled.Bullet />
      {children}
    </Styled.RadioButton>
  );
}

export default RadioButton;