import styled from 'styled-components';

import { Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

export const Header = () => (
  <StyledHeader>
    <Typography className="title">
      125277 - <b>Migros AG</b>
    </Typography>
    <div className="buttons-wrapper">
      <Button variant="text" color="warning" startIcon={<Iconify icon="ic:baseline-edit" />}>
        Bearbeiten
      </Button>
      <Button variant="text" color="warning" startIcon={<Iconify icon="mingcute:delete-3-fill" />}>
        Löschen
      </Button>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  .title {
    font-size: 25px;
  }
  .buttons-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
