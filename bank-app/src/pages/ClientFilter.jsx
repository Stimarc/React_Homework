import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;

export const ClientFilter = ({ onFilterChange }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  const handleNameChange = (e) => {
    setNameFilter(e.target.value);
    onFilterChange({ name: e.target.value, phone: phoneFilter });
  };

  const handlePhoneChange = (e) => {
    setPhoneFilter(e.target.value);
    onFilterChange({ name: nameFilter, phone: e.target.value });
  };

  return (
    <FilterContainer>
      <h3>Filter Clients</h3>
      <label>
        Name:
        <input type="text" value={nameFilter} onChange={handleNameChange} />
      </label>
      <label>
        Phone:
        <input type="text" value={phoneFilter} onChange={handlePhoneChange} />
      </label>
    </FilterContainer>
  );
};