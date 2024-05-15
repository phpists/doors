import { useState } from 'react';
import styled from 'styled-components';

import { Card, Button, CardHeader } from '@mui/material';

import { StandorteTable } from './StandorteTable';
import { NewStandort } from './NewStandort/NewStandort';

export const Standorte = () => {
  const [modal, setModal] = useState(false);

  return (
    <StyledStandorte>
      <NewStandort open={modal} onClose={() => setModal(false)} />
      <Card>
        <CardHeader title="Standorte" subheader={<>Kunde: Migros AG</>} />
        <StandorteTable />
        <Button variant="contained" onClick={() => setModal(true)} className="add-btn">
          Standort hinzufügen
        </Button>
      </Card>
    </StyledStandorte>
  );
};
const StyledStandorte = styled.div`
  .add-btn {
    margin: 0 10px 30px;
  }
`;
