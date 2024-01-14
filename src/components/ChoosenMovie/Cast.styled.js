import styled from 'styled-components';

export const CastList = styled.ul`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 150px;
  text-align: center;
`;

export const ActorFoto = styled.img`
  width: 150px;
  border-radius: 20px;
`;

export const ActorName = styled.h3`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  margin-top: 7px;
  margin-bottom: 5px;
`;

export const ActorRole = styled.p`
  color: #bcbcbc;
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;
