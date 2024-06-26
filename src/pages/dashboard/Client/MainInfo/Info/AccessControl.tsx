import styled from 'styled-components';

import { Checkbox, MenuItem, TextField, Typography, FormControlLabel } from '@mui/material';

export const AccessControl = () => (
  <StyledAccessControl>
    <Typography variant="body2" sx={{ color: `text.secondary` }}>
      Wenn das Kontrollkästchen {`"`}Webzugriff erlauben{`"`} aktiviert ist, können Kunden sich über
      erstellte Konten anmelden. Für jeden Standort müssen Sie einen separaten Zugang erstellen. Sie
      können einen neuen Standort hinzufügen oder entfernen, indem Sie rechts auf die Schaltfläche
      {`"`}Standort hinzufügen{`"`} klicken.
    </Typography>
    <FormControlLabel
      value="default"
      control={<Checkbox size="medium" color="default" />}
      label="Webzugriff erlauben"
      sx={{ textTransform: 'capitalize' }}
      className="checkbox"
    />
    <FormControlLabel
      value="default"
      control={<Checkbox size="medium" color="default" />}
      label="Aktivieren der Zwei-Faktor-Authentifizierung"
      sx={{ textTransform: 'capitalize' }}
      className="checkbox"
    />{' '}
    <Typography variant="subtitle1" className="title">
      Gerätezugriffskontrolle
    </Typography>
    <TextField
      variant="outlined"
      select
      value="Nutzer"
      className="select-wrapper"
      label="Rolle"
      // onChange={handleChangeCurrency}
    >
      <MenuItem value="Nutzer">Nutzer</MenuItem>
      <MenuItem value="(Nutzer 1)">Nutzer</MenuItem>
      <MenuItem value="(Nutzer 2)">Nutzer</MenuItem>
    </TextField>
    <FormControlLabel
      value="default"
      control={<Checkbox size="medium" color="default" />}
      label="Rolle 'Besitzer' zuweisen"
      sx={{ textTransform: 'capitalize' }}
      className="checkbox"
    />
    <Typography variant="body2" color="error" className="text-info">
      Achtung! Wenn Sie dieses Kontrollkästchen aktivieren, können Sie die Geräte dieses Besitzers
      sowie Geräte an einem beliebigen seiner Standorte nicht verwalten. Diese Aktion kann nicht
      rückgängig gemacht werden!
    </Typography>
  </StyledAccessControl>
);

const StyledAccessControl = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  .title {
    margin: 30px 0;
  }
  .select-wrapper {
    width: 200px;
  }
  .text-info {
    padding-left: 30px;
  }
  .checkbox span {
    font-weight: 600 !important;
  }
`;
