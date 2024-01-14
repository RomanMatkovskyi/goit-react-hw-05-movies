import styled from 'styled-components';

export const SearchForm = styled.form`
  max-width: 250px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const Search = styled.input`
  width: 100%;
  margin-top: 25px;
  padding: 12px;
  border-radius: 20px;
  background: #211f30;
  color: #bbb;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
  border: none;
  outline: none;
  transition: outline 0.3s linear;

  &:focus {
    outline: 1px solid #f4a75470;
  }
`;

export const SearchBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 2px;
  bottom: 1.5px;
  cursor: pointer;
`;
