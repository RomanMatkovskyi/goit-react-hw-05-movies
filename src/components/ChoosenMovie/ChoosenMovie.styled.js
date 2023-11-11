import styled from 'styled-components';

export const MovieTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MovieImage = styled.img`
  padding: 1px;
  border: 1px solid grey;
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: baseline;
`;

export const Score = styled.p`
  margin-bottom: 10px;
`;

export const Overwiew = styled.h3`
  margin-bottom: 5px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;

  a {
    color: black;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #18b6ea;
  }
`;
