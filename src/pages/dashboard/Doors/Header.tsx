import styled from 'styled-components';

import { MenuItem, TextField, InputAdornment } from '@mui/material';

import Iconify from 'src/components/iconify';

export const Header = () => (
  <StyledHeader>
    <TextField
      variant="outlined"
      select
      value="Kunde (Alle)"
      className="select-wrapper"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="material-symbols:search" />
          </InputAdornment>
        ),
      }}
      // onChange={handleChangeCurrency}
    >
      <MenuItem value="Kunde (Alle)"> Kunde (Alle)</MenuItem>
      <MenuItem value="Kunde (Alle2)"> Kunde (Alle)</MenuItem>
      <MenuItem value="Kunde (Alle3)"> Kunde (Alle)</MenuItem>
    </TextField>
    <Iconify icon="mingcute:delete-3-fill" className="delete-icon" />

    <TextField
      variant="outlined"
      select
      value="Standort (Alle)"
      className="select-wrapper"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="material-symbols:search" />
          </InputAdornment>
        ),
      }}
    >
      <MenuItem value="Standort (Alle)"> Standort (Alle)</MenuItem>
      <MenuItem value="Standort (Alle2)"> Standort (Alle)</MenuItem>
      <MenuItem value="Standort (Alle3)"> Standort (Alle)</MenuItem>
    </TextField>
    <Iconify icon="mingcute:delete-3-fill" />
  </StyledHeader>
);

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(145, 158, 171, 0.08);
  color: #212b36;
  border-radius: 8px;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 12px;
  border: 1px dashed rgba(145, 158, 171, 0.2);
  svg {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
  .select-wrapper {
    width: 250px;
    background: #fff;
  }
  .delete-icon {
    margin-right: 20px;
  }
`;
