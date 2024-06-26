import styled from 'styled-components';

import { Header } from './Header';
import { DoorsTable } from './DoorsTable';

const Doors = () => (
  <StyledDoors>
    <Header />
    <DoorsTable />
  </StyledDoors>
);

const StyledDoors = styled.div``;

export default Doors;
