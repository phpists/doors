import styled from 'styled-components';

import { Button } from '@mui/material';

export const Footer = () => (
  <StyledFooter>
    <div className="btns">
      <Button variant="contained">Neue Conf.</Button>
      <Button variant="contained">Ändern</Button>
      <Button variant="contained">Löschen</Button>
    </div>
    <Button variant="contained">Übernehmen</Button>
  </StyledFooter>
);

const StyledFooter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  .btns {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .btns {
      flex-direction: column;
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
