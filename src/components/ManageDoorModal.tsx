import styled from 'styled-components';

import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { ManageDoor } from './ManageDoor';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ManageDoorModal = ({ open, onClose }: Props) => (
  <StyledManageDoorModal>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Geräteoperationen
        <Typography fontSize={12} className="flex">
          Gerät ID:{' '}
          <Typography fontSize={12} style={{ display: 'inline' }} color="orange">
            LS-2330956
          </Typography>
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ color: 'text.secondary' }}>
        <ManageDoor />
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
  </StyledManageDoorModal>
);

const StyledManageDoorModal = styled.div``;
