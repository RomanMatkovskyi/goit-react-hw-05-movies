import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTitle = styled.h1`
  color: #fff;
  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
  margin-left: 25px;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const TrendingList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: last baseline;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.h2`
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

export const TrendItem = styled.li`
  width: 250px;

  &:hover ${MovieTitle} {
    color: #fb5123;
  }
`;

export const MovieImg = styled.img`
  border-radius: 20px;
`;
