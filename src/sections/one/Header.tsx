import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '@mui/material';

import Iconify from 'src/components/iconify';

import { NewContactModal } from './NewContactModal/NewContactModal';

export const Header = () => {
  const [newContactModal, setNewContactModal] = useState(false);

  return (
    <>
      <NewContactModal open={newContactModal} onClose={() => setNewContactModal(false)} />
      <StyledHeader>
        <Button variant="contained" color="info" startIcon={<Iconify icon="ic:baseline-edit" />}>
          Bearbeiten
        </Button>
        <Button variant="contained" startIcon={<Iconify icon="bxs:file-export" />}>
          Export
        </Button>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mdi:plus-box" />}
          onClick={() => setNewContactModal(true)}
        >
          Neuer
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<Iconify icon="mingcute:delete-3-fill" />}
        >
          Löschen
        </Button>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: rgba(145, 158, 171, 0.08);
  color: #212b36;
  border-radius: 8px;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 12px;
  border: 1px dashed rgba(145, 158, 171, 0.2);
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    height: max-content;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
