import styled from 'styled-components';

import { BackButton } from './BackButton';
import { Actions } from './Actions/Actions';
import { MainInfo } from './MainInfo/MainInfo';

const Door = () => (
  <StyledDoor>
    <BackButton />
    <MainInfo />
    <Actions />
  </StyledDoor>
);

const StyledDoor = styled.div``;

export default Door;
