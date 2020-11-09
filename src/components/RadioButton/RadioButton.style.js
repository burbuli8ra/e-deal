import styled from '@emotion/styled/macro';
import { colors } from 'theme';

const Bullet = styled.div`
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${colors.pastelBlue};
  height: 16px;
  width: 16px;
  position: absolute;
  top: 0;
  left: 0;
`;
Bullet.displayName = 'Bullet';

const RadioButton = styled.div`
  color: ${colors.pastelBlue};
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  padding-left: 20px;
  position: relative;
  width: fit-content;
  
  ${({ isChecked }) => isChecked ? `
    ${Bullet} {
      box-shadow: inset 0 0 0 6px ${colors.darkPastelBlue};
    }
  ` : `
    &:hover {
      ${Bullet} {
        box-shadow: inset 0 0 0 2px ${colors.darkPastelBlue};
      }
    }
  `}
`;
RadioButton.displayName = 'RadioButton';

export default {
  Bullet,
  RadioButton
};