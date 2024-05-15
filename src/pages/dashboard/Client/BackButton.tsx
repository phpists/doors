import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import Iconify from 'src/components/iconify';

export const BackButton = () => (
  <StyledBackButton to="/dashboard">
    <Iconify icon="tabler:arrow-left" />
    Zurück zu den Kontaktenansicht
  </StyledBackButton>
);

const StyledBackButton = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 5px;
  color: #212b36;
  text-decoration: none;
`;
