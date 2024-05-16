import styled from '@emotion/styled';

import { Header } from './Header';
import { BackButton } from './BackButton';
import { Devices } from './Devices/Devices';
import { MainInfo } from './MainInfo/MainInfo';

const Client = () => (
  <StyledClient>
    <BackButton />
    <Header />
    <MainInfo />
    <Devices />
  </StyledClient>
);

const StyledClient = styled.div`
  padding: 0 10px;
`;

export default Client;
