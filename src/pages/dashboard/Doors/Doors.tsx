import styled from 'styled-components';

import { Header } from './Header';
import { DoorsTableTable } from './DoorsTable';

const Doors = () => (
  <StyledDoors>
    <Header />
    <DoorsTableTable />
  </StyledDoors>
);

const StyledDoors = styled.div``;

export default Doors;
