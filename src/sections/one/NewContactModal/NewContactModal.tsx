import { useState } from 'react';
import styled from 'styled-components';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { Allgemein } from './Allgemein';
import { AccessControl } from './AccessControl';

interface Props {
  open: boolean;
  onClose: () => void;
}

const TABS = [
  {
    value: 0,
    label: 'Allgemein',
  },
  {
    value: 1,
    label: 'Web-Zugriffskontrolle',
  },
];

export const NewContactModal = ({ open, onClose }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <StyledNewContactModal>
      {' '}
      <Dialog open={open} onClose={onClose} maxWidth={1000}>
        <DialogTitle>Neuer Kontakt</DialogTitle>

        <DialogContent style={{ width: '90svw', maxWidth: 1000 }}>
          <Tabs value={currentTab} onChange={(e, tab) => setCurrentTab(tab)}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>
          {currentTab === 0 ? <Allgemein /> : <AccessControl />}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} variant="outlined" color="inherit">
            Abbrechen
          </Button>
          <Button onClick={onClose} variant="contained">
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </StyledNewContactModal>
  );
};

const StyledNewContactModal = styled.div``;
