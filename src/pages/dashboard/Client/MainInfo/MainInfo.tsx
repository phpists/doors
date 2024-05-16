import styled from 'styled-components';

import { Info } from './Info/Info';
import { Standorte } from './Standorte/Standorte';

export const MainInfo = () => (
  <StyledMainInfo>
    <Info />
    <Standorte />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div`
  display: grid;
  grid-template-columns: 50% 45%;
  gap: 40px;
  margin-bottom: 60px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
