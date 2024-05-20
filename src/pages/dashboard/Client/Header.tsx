import { useState } from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
import { NewContactModal } from 'src/components/NewContactModal/NewContactModal';

export const Header = () => {
  const [edit, setEdit] = useState(false);

  return (
    <StyledHeader>
      <NewContactModal open={edit} onClose={() => setEdit(false)} />
      <Typography className="title">
        125277 - <b>Migros AG</b>
      </Typography>
      <div className="buttons-wrapper">
        <Button
          variant="text"
          color="warning"
          startIcon={<Iconify icon="ic:baseline-edit" />}
          onClick={() => setEdit(true)}
        >
          Bearbeiten
        </Button>
        <Button
          variant="text"
          color="warning"
          startIcon={<Iconify icon="mingcute:delete-3-fill" />}
        >
          Löschen
        </Button>
      </div>
    </StyledHeader>
  );
};

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
