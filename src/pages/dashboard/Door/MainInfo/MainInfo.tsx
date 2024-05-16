import styled from 'styled-components';

import { Typography } from '@mui/material';

import { Info } from './Info';
import { ClientInfo } from './ClientInfo';

export const MainInfo = () => (
  <StyledMainInfo>
    <div>
      <Typography className="title">Geräteinformation</Typography>
      <Info />
    </div>
    <div>
      <Typography className="title">Kundeinformation</Typography>
      <ClientInfo />
    </div>
  </StyledMainInfo>
);

const StyledMainInfo = styled.div`
  display: grid;
  grid-template-columns: 60% 38%;
  gap: 20px;
  margin-bottom: 30px;
  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
