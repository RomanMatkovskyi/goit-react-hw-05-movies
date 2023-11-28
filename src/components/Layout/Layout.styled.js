import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 10px;
  background-color: #ffe3001a;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  > a {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: red;
  }

  .active {
    color: blue;
  }
`;
