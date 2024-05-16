import styled from 'styled-components';

import { Typography } from '@mui/material';

import { Header } from './Header';
import { DoorsTable } from './DoorsTable';

const Doors = () => (
  <StyledDoors>
    <Typography variant="h4" className="page-title">
      Standorte & Überwachung
    </Typography>
    <Header />
    <DoorsTable />
  </StyledDoors>
);

const StyledDoors = styled.div``;

export default Doors;
