import styled from 'styled-components';

import {
  Button,
  Dialog,
  MenuItem,
  Checkbox,
  TextField,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const NewStandort = ({ open, onClose }: Props) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Neue Standort</DialogTitle>
    <DialogContent style={{ width: '95svw', maxWidth: 500 }}>
      <StyledNewStandort>
        <Typography sx={{ color: 'text.primary' }} className="subtitle">
          Kunde: Migros AG
        </Typography>
        <div className="inputs-list">
          <TextField variant="outlined" fullWidth label="Ort Name (Objekt name, Stockwerk etc.)" />
          <TextField variant="outlined" fullWidth label="Name (Optional??)" />
        </div>
        <Typography sx={{ color: 'text.secondary' }} className="section-title">
          Strandort Adresse
        </Typography>
        <div className="inputs-list">
          <div className="inputs-group">
            <TextField
              variant="outlined"
              select
              value="(СН)"
              className="select-wrapper"
              // onChange={handleChangeCurrency}
            >
              <MenuItem value="(СН)">(СН)</MenuItem>
              <MenuItem value="(СН 1)">(СН)</MenuItem>
              <MenuItem value="(СН 2)">(СН)</MenuItem>
            </TextField>
            <TextField variant="outlined" fullWidth label="PLZ, Ort" />
          </div>
          <div className="inputs-group">
            <TextField variant="outlined" fullWidth label="Strasse" />
            <TextField variant="outlined" label="Haus Nr. " />
          </div>
          <TextField variant="outlined" fullWidth label="Addresszusatz " />
          <div className="inputs-group">
            <TextField variant="outlined" fullWidth label="E-Mail" />
            <TextField variant="outlined" fullWidth label="Telefon" />
          </div>
        </div>
        <FormControlLabel
          value="default"
          control={<Checkbox size="medium" color="default" />}
          label="Ein Profil für den Webzugriff erstellen"
          sx={{ textTransform: 'capitalize' }}
          className="checkbox-first"
        />
        <div className="footer-form">
          <FormControlLabel
            value="default"
            control={<Checkbox size="medium" color="default" />}
            label="Diesem Profil erlauben, alle Standorte des
            aktuellen Kunden einzusehen"
            sx={{ textTransform: 'capitalize' }}
          />
          <TextField variant="outlined" fullWidth label="Login" />
          <TextField type="password" variant="outlined" fullWidth label="Passwort" />
        </div>
      </StyledNewStandort>
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
);

const StyledNewStandort = styled.div`
  .subtitle {
    margin-bottom: 30px;
    padding: 0 10px;
  }
  .inputs-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 20px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
  .inputs-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-title {
    margin-bottom: 10px;
    padding: 0 10px;
  }
  .select-wrapper {
    width: 100px;
  }
  .checkbox-first {
    padding: 0 10px;
  }
  .footer-form {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: rgba(145, 158, 171, 0.08);
  }
`;
