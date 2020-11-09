import styled from '@emotion/styled';
import { colors } from 'theme';

const FilterLabel = styled.div`
  color: ${colors.pastelBlue};
  font-size: 14px;
  font-weight: 700;
  margin: 0 4px;
`;
FilterLabel.displayName = 'FilterLabel';

const Filters = styled.div`
  align-items: center;
  display: flex;
`;
Filters.displayName = 'Filters';

const Label = styled.div`
  color: ${colors.pastelBlue};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
`;
Label.displayName = 'Label';

const OptionColumn = styled.div``;

const Options = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  column-gap: 20px;
  row-gap: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 100%;
  flex: 0 1 100%;
  margin-bottom: 10px;
  padding: 20px;
  
  @media (max-width: 520px) {
    grid: initial;
  }
`;
Options.displayName = 'Options';

const OrderOptions = styled.div`
  display: flex;
  flex-direction: column;
  
  > * {
    margin-bottom: 4px;
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
OrderOptions.displayName = 'OrderOptions';

export default {
  FilterLabel,
  Filters,
  Label,
  OptionColumn,
  Options,
  OrderOptions
};