import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieSearch = styled.input`
  margin-top: 20px;
  margin-right: 15px;
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 15px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #18b6ea;
  }
`;

export const MovieList = styled.ul`
  width: 960px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 30px;
`;

export const MovieItem = styled.li`
  width: calc((100% - 60) / 2);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;

export const MovieTitle = styled.h3`
  width: 450px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
`;

export const MovieImage = styled.img`
  width: 450px;
  height: 250px;
  display: block;
`;
