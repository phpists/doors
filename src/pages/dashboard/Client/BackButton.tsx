import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Typography, Breadcrumbs } from '@mui/material';

export const BackButton = () => (
  <StyledBackButton>
    <Breadcrumbs>
      <NavLink color="inherit" to="/dashboard">
        Kundenansicht
      </NavLink>
      <Typography sx={{ color: 'text.primary' }}>Migros AG</Typography>
    </Breadcrumbs>
  </StyledBackButton>
);

const StyledBackButton = styled.div`
  margin-bottom: 20px;
  a {
    line-height: 1.5714285714285714;
    font-size: 0.875rem;
    font-family:
      Public Sans,
      sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #637381;
    &:hover {
      text-decoration: underline;
    }
  }
`;
