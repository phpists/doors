import { useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '@mui/material';

import { SplitIcon } from 'src/assets/icons/split';

export const ManageDoor = () => {
  const [active, setActive] = useState<string[]>([]);

  return (
    <StyledManageDoor>
      <div className="buttons">
        <Button
          variant="contained"
          color={active?.includes('1') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('1') ? active?.filter((b) => b !== '1') : [...active, '1'])
          }
        >
          Automat
        </Button>
        <Button
          variant="contained"
          color={active?.includes('2') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('2') ? active?.filter((b) => b !== '2') : [...active, '2'])
          }
        >
          Automat-Reduziert
        </Button>
        <Button
          variant="contained"
          color={active?.includes('3') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('3') ? active?.filter((b) => b !== '3') : [...active, '3'])
          }
        >
          Dauerauf
        </Button>
        <Button
          variant="contained"
          color={active?.includes('4') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('4') ? active?.filter((b) => b !== '4') : [...active, '4'])
          }
        >
          Nacht
        </Button>
        <Button
          variant="contained"
          color={active?.includes('5') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('5') ? active?.filter((b) => b !== '5') : [...active, '5'])
          }
        >
          Ausgang
        </Button>
        <Button
          variant="contained"
          color={active?.includes('6') ? 'success' : undefined}
          onClick={() =>
            setActive(active?.includes('6') ? active?.filter((b) => b !== '6') : [...active, '6'])
          }
        >
          Manuell
        </Button>
      </div>
      <Button
        variant="contained"
        color={active?.includes('7') ? 'error' : 'info'}
        onClick={() =>
          setActive(active?.includes('7') ? active?.filter((b) => b !== '7') : [...active, '7'])
        }
        className="open-btn"
      >
        <SplitIcon />
        {active?.includes('7') ? 'Öffnen' : 'Geschlossen'}
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
