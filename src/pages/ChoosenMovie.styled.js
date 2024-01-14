import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const MovieImage = styled.img`
  padding: 1px;
  border: 1px solid grey;
  border-radius: 20px;
`;

export const BackButton = styled(Link)`
  display: block;
  margin-top: 8px;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fb5123;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;

export const FilmDescr = styled.div`
  padding-top: 35px;
`;

export const Score = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #bcbcbc;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const FilmDescrTitle = styled.h3`
  margin-bottom: 5px;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const Description = styled.p`
  max-width: 800px;
  margin-bottom: 10px;
  color: #bcbcbc;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.24px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  color: #bcbcbc;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;

  a {
    color: inherit;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #fb5123;
  }
`;
