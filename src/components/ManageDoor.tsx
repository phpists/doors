import { useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '@mui/material';

import { SplitIcon } from 'src/assets/icons/split';

export const ManageDoor = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <StyledManageDoor>
      <div className="buttons">
        <Button
          variant="contained"
          color={active === '1' ? 'success' : undefined}
          onClick={() => setActive(active === '1' ? null : '1')}
        >
          Automat
        </Button>
        <Button
          variant="contained"
          color={active === '2' ? 'success' : undefined}
          onClick={() => setActive(active === '2' ? null : '2')}
        >
          Automat-Reduziert
        </Button>
        <Button
          variant="contained"
          color={active === '3' ? 'success' : undefined}
          onClick={() => setActive(active === '3' ? null : '3')}
        >
          Dauerauf
        </Button>
        <Button
          variant="contained"
          color={active === '4' ? 'success' : undefined}
          onClick={() => setActive(active === '4' ? null : '4')}
        >
          Nacht
        </Button>
        <Button
          variant="contained"
          color={active === '5' ? 'success' : undefined}
          onClick={() => setActive(active === '5' ? null : '5')}
        >
          Ausgang
        </Button>
        <Button
          variant="contained"
          color={active === '6' ? 'success' : undefined}
          onClick={() => setActive(active === '6' ? null : '6')}
        >
          Manuell
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() => setActive(active === '7' ? null : '7')}
        className="open-btn"
        color="info"
      >
        <SplitIcon />
        Öffnen
      </Button>
    </StyledManageDoor>
  );
};

const StyledManageDoor = styled.div`
  max-width: 424px;
  width: 100%;
  padding: 20px;
  background-color: rgba(145, 158, 171, 0.08);

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 29px;
  }
  .open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
  }
  @media (max-width: 500px) {
    .buttons {
      grid-template-columns: 1fr;
    }
  }
`;
