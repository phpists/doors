import styled from 'styled-components';

import { Radio, MenuItem, TextField, FormControlLabel } from '@mui/material';

export const Allgemein = () => (
  <StyledAllgemein>
    <div className="fileds-list">
      <div className="header">
        <div className="radio-btns">
          <FormControlLabel
            value="default"
            control={<Radio size="medium" color="default" />}
            label="Firma"
            sx={{ textTransform: 'capitalize' }}
          />
          <FormControlLabel
            value="default"
            control={<Radio size="medium" color="default" />}
            label="Privat"
            sx={{ textTransform: 'capitalize' }}
          />
        </div>
        <div className="id-number">ID/Kundennummer: 0253656</div>
      </div>
      <TextField variant="outlined" required fullWidth label="Name 1" className="field" />
      <TextField variant="outlined" fullWidth label="Name 2" className="field" />
      <div className="field-group">
        <TextField variant="outlined" required fullWidth label="Strasse" className="field" />
        <TextField variant="outlined" label="Haus Nr. " className="field" />
      </div>
      <TextField variant="outlined" fullWidth label="Addresszusatz " className="field" />
      <div className="field-group">
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
        <TextField variant="outlined" required label="PLZ" />
        <TextField variant="outlined" required fullWidth label="Ort" />
      </div>
    </div>
    <div className="fileds-list">
      <div className="field-group">
        <TextField variant="outlined" fullWidth label="Telephone 1" className="field" />
        <TextField variant="outlined" fullWidth label="Telephone 2" className="field" />
      </div>
      <div className="field-group">
        <TextField variant="outlined" fullWidth label="E-Mail" className="field" />
        <TextField variant="outlined" fullWidth label="Webseite" className="field" />
      </div>
      <TextField
        multiline
        rows={11}
        variant="outlined"
        fullWidth
        label="Notiz/Bemerkungen"
        className="field"
      />
    </div>
  </StyledAllgemein>
);

const StyledAllgemein = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  .fileds-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 21px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .id-number {
      padding: 16px 14px;
      line-height: 1.5714285714285714;
      font-size: 0.875rem;
      font-family:
        Public Sans,
        sans-serif;
      font-weight: 400;
      border-radius: 8px;
      border: 1px solid rgba(145, 158, 171, 0.2);
      height: 53px;
    }
  }
  .radio-btns {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .field-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .select-wrapper {
    min-width: 100px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    .field-group {
      flex-direction: column;
      gap: 10px;
    }
    .field,
    .select-wrapper {
      width: 100%;
    }
    .header {
      flex-direction: column;
      align-items: start;
      .id-number {
        width: 100%;
      }
    }
  }
`;
