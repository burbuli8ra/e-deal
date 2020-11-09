import styled from '@emotion/styled';
import { colors } from 'theme';

const TextInput = styled.input`
  background-color: ${colors.white};
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px ${colors.pastelBlue};
  color: ${colors.darkGrey};
  font-size: 16px;
  outline: none;
  padding: 10px;
  width: 100px;
  
  &:focus {
    box-shadow: inset 0 0 0 2px ${colors.darkPastelBlue};
  }
`;

export default { TextInput };