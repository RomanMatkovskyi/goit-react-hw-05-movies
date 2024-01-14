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
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: right;
  align-items: end;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;

export const MovieTitle = styled.h3`
  max-width: 400px;
  color: #fff;
  font-family: Lato;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-bottom: 12px;
  transition: color 0.3s ease;
`;

export const MovieItem = styled.li`
  width: calc((100% - 60px) / 3);

  &:hover ${MovieTitle} {
    color: #fb5123;
  }
`;

export const MovieImage = styled.img`
  max-width: 400px;
  height: 250px;
  display: block;
  border-radius: 20px;
`;

export const FailedSearch = styled.p`
  margin-top: 25px;
  text-align: center;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const SearchMovieSection = styled.section`
  padding-bottom: 40px;
`;
