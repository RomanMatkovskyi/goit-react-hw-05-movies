import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 20px;
  background-color: #15141f;
  border-radius: 25px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  > a {
    color: #e2e2e2;
    font-family: Lato;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.385px;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #fb5123;
  }

  .active {
    color: #fb5123;
  }
`;
