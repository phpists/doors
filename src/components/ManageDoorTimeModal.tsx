import styled from 'styled-components';

import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { ManageDoorTime } from './ManageDoorTime/ManageDoorTime';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ManageDoorTimeModal = ({ open, onClose }: Props) => (
  <Dialog open={open} onClose={onClose} maxWidth={800}>
    <DialogTitle>
      Gerätezeitsteuerung{' '}
      <Typography fontSize={12} className="flex">
        Gerät ID:{' '}
        <Typography fontSize={12} style={{ display: 'inline' }} color="orange">
          LS-2330956
        </Typography>
      </Typography>
    </DialogTitle>

    <DialogContent sx={{ color: 'text.secondary' }}>
      <StyledManageDoorTimeModal>
        <Typography color="gray">Zeitschaltung</Typography>
        <ManageDoorTime />
      </StyledManageDoorTimeModal>
    </DialogContent>

    <DialogActions>
      <Button variant="outlined" onClick={onClose}>
        Abbrechen
      </Button>
      <Button variant="contained" onClick={onClose} autoFocus>
        Schließen
      </Button>
    </DialogActions>
  </Dialog>
);

const StyledManageDoorTimeModal = styled.div`
  width: 95svw;
  max-width: 800px;
`;
