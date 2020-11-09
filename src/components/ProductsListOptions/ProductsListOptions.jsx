import React, { useState } from 'react';
import { RadioButton, TextInput } from 'components';
import Styled from './ProductsListOptions.style';

const KeyCodes = {
  ENTER: 13
};

const ProductsListOptions = ({
  categoryMaxPrice,
  categoryMinPrice,
  onMaxPriceUpdate,
  onMinPriceUpdate,
  onOrderByUpdate,
  onOrderTypeUpdate,
  orderByOptions,
  orderByValue,
  orderTypeOptions,
  orderTypeValue
}) => {
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');

  const handlePriceChange = (fieldType, { target: { value } }) => {
    // Allow only numbers and empty
    const regex = /^(\s*|\d+)$/;

    if (!regex.test(value)) {
      return;
    }

    if (fieldType === 'max') {
      setMaxPrice(value);
      return;
    }

    setMinPrice(value);
  };

  const handleMaxPriceUpdate = (
    getPriceInCents,
    valueInCents,
    maxPriceInEuros,
    minPriceInEuros
  ) => {
    // Case of greater input value than max limit
    if (valueInCents > categoryMaxPrice) {
      setMaxPrice(maxPriceInEuros.toString());
      onMaxPriceUpdate(categoryMaxPrice);
      return;
    }

    // Case of lower input value than min limit
    if (valueInCents < categoryMinPrice) {
      setMaxPrice((minPriceInEuros + 1).toString());
      onMaxPriceUpdate(categoryMinPrice + 100);
      return;
    }

    // Case of lower input value than value of min field
    if (valueInCents < getPriceInCents(minPrice)) {
      setMaxPrice((parseInt(minPrice ,10) + 1).toString());
      onMaxPriceUpdate(getPriceInCents(minPrice) + 100);
      return;
    }

    onMaxPriceUpdate(valueInCents);
  };

  const handleMinPriceUpdate = (
    getPriceInCents,
    valueInCents,
    maxPriceInEuros,
    minPriceInEuros
  ) => {
    // Case of greater input value than max limit
    if (valueInCents > categoryMaxPrice) {
      setMinPrice((maxPriceInEuros - 1).toString());
      onMinPriceUpdate(categoryMaxPrice - 100);
      return;
    }

    // Case of lower input value than min limit
    if (valueInCents < categoryMinPrice) {
      setMinPrice(minPriceInEuros.toString());
      onMinPriceUpdate(categoryMinPrice);
      return;
    }

    // Case of greater input value than value of max field
    if (valueInCents > getPriceInCents(maxPrice)) {
      setMinPrice((parseInt(maxPrice ,10) - 1).toString());
      onMinPriceUpdate(getPriceInCents(maxPrice) - 100);
      return;
    }

    onMinPriceUpdate(valueInCents);
  };

  const handlePriceUpdate = (fieldType, { target: { value } }) => {
    const getPriceInCents = price => parseInt(price, 10) * 100;
    const valueInCents = getPriceInCents(value);
    const maxPriceInEuros = Math.ceil(categoryMaxPrice/100);
    const minPriceInEuros = Math.floor(categoryMinPrice/100);

    if (fieldType === 'max') {
      handleMaxPriceUpdate(
        getPriceInCents,
        valueInCents,
        maxPriceInEuros,
        minPriceInEuros
      );
    }

    if (fieldType === 'min') {
      handleMinPriceUpdate(
        getPriceInCents,
        valueInCents,
        maxPriceInEuros,
        minPriceInEuros
      );
    }
  };

  const handlePriceKeyPress = (fieldType, e) => {
    const { charCode } = e;

    if (charCode === KeyCodes.ENTER) {
      handlePriceUpdate(fieldType, e);
    }
  };

  return (
    <Styled.Options>
      <Styled.OptionColumn>
        <Styled.Label>Filter by Price (€)</Styled.Label>
        <Styled.Filters>
          <TextInput
            onBlur={e => handlePriceUpdate('min', e)}
            onChange={e => handlePriceChange('min', e)}
            onKeyPress={e => handlePriceKeyPress('min', e)}
            placeholder="Min €"
            value={minPrice}
          />
          <Styled.FilterLabel>to</Styled.FilterLabel>
          <TextInput
            onBlur={e => handlePriceUpdate('max', e)}
            onChange={e => handlePriceChange('max', e)}
            onKeypress={e => handlePriceKeyPress('max', e)}
            placeholder="Max €"
            value={maxPrice}
          />
        </Styled.Filters>
      </Styled.OptionColumn>
      <Styled.OptionColumn>
        <Styled.Label>Order by</Styled.Label>
        <Styled.OrderOptions>
          {orderByOptions.map(item => (
            <RadioButton
              key={item.value}
              label={item.value}
              value={orderByValue}
              onClick={() => onOrderByUpdate(item.value)}
            >
              {item.label}
            </RadioButton>
          ))}
        </Styled.OrderOptions>
      </Styled.OptionColumn>
      <Styled.OptionColumn>
        <Styled.Label>Order Type</Styled.Label>
        <Styled.OrderOptions>
          {orderTypeOptions.map(item => (
            <RadioButton
              key={item.value}
              label={item.value}
              value={orderTypeValue}
              onClick={() => onOrderTypeUpdate(item.value)}
            >
              {item.label}
            </RadioButton>
          ))}
        </Styled.OrderOptions>
      </Styled.OptionColumn>
    </Styled.Options>
  );
};

export default ProductsListOptions;