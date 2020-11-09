import styled from '@emotion/styled';
import colors from 'theme/colors';

const Pagination = styled.ul`
  align-self: flex-end;
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 10px;
  padding-left: 0;
`;
Pagination.displayName = 'Pagination';

const PageItem = styled.li`
  background-color: ${({ isActive, isDisabled }) =>
  // eslint-disable-next-line no-nested-ternary
    isDisabled ? colors.grey : (
      isActive ? colors.pastelBlue : colors.lightPastelBlue
    )};
  border-radius: 4px;
  color: ${colors.white};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  margin-left: 4px;
  margin-right: 4px;
  padding: 10px;
  
  &:first-of-type {
    margin-left: 0;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
`;
PageItem.displayName = 'PageItem';

export default {
  Pagination,
  PageItem
};