import styled from 'styled-components';

import { Statistic } from './Statistic';
import { BackButton } from './BackButton';
import { Actions } from './Actions/Actions';
import { MainInfo } from './MainInfo/MainInfo';

const Door = () => (
  <StyledDoor>
    <BackButton />
    <div className="door-header">
      <MainInfo />
      <Statistic />
    </div>
    <Actions />
  </StyledDoor>
);

const StyledDoor = styled.div`
  padding: 0 10px;
  .door-header {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 20px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Door;
