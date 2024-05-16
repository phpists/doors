import styled from 'styled-components';

import {
  Button,
  Dialog,
  MenuItem,
  TextField,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  disconnect?: boolean;
}

export const ConnectDoorModal = ({ open, onClose, disconnect }: Props) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      {disconnect ? 'Ortsbindung bearbeiten' : 'Standort binden'}
      <Typography fontSize={12} className="flex">
        Gerät ID:{' '}
        <Typography fontSize={12} style={{ display: 'inline' }} color="orange">
          LS-2330956
        </Typography>
      </Typography>
    </DialogTitle>

    <DialogContent sx={{ color: 'text.secondary' }}>
      <StyledConnectDoorModal>
        <div className="inputs-list">
          <TextField variant="outlined" fullWidth label="Geräte Name" />
          <TextField variant="outlined" fullWidth label="Gerätetyp" />
          <TextField
            variant="outlined"
            select
            value="Migros"
            className="select-wrapper"
            label="Kunde"
            // onChange={handleChangeCurrency}
          >
            <MenuItem value="Migros">Migros </MenuItem>
            <MenuItem value="Migros1">Migros </MenuItem>
            <MenuItem value="Migros2">Migros </MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            select
            value="Ziel Ort"
            className="select-wrapper"
            // onChange={handleChangeCurrency}
          >
            <MenuItem value="Ziel Ort">Ziel Ort</MenuItem>
            <MenuItem value="Ziel Ort2">Ziel Ort</MenuItem>
            <MenuItem value="Ziel Ort3">Ziel Ort</MenuItem>
          </TextField>
        </div>
        <Typography variant="subtitle1">Zusammenfassung</Typography>
        <div className="footer-form">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Geräte Name
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            Sensor
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Geräte ID
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            LS-2330956
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Gerätetyp
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            Tor
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Target
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            migros.tstgmbh.ch
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ziel Ort
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Hausimollstrasse 1
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              4622 Egerkingen
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              Schweiz
            </Typography>
          </div>
        </div>
      </StyledConnectDoorModal>
    </DialogContent>

    <DialogActions>
      <Button variant="outlined" onClick={onClose}>
        Abbrechen
      </Button>
      <Button variant="contained" onClick={onClose} autoFocus>
        {disconnect ? 'Bearbeiten' : 'Verbinden'}
      </Button>
    </DialogActions>
  </Dialog>
);

const StyledConnectDoorModal = styled.div`
  width: 100svw;
  max-width: 500px;
  overflow-x: hidden;
  .inputs-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
  .footer-form {
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    background: rgba(145, 158, 171, 0.08);
    display: grid;
    grid-template-columns: 100px 1fr;
  }
`;
