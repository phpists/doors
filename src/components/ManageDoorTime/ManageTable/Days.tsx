import styled from 'styled-components';
import React, { useState } from 'react';

import { Typography } from '@mui/material';

const DAYS = ['M', 'D', 'M', 'D', 'F', 'S', 'S'];

export const Days = () => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <StyledDays>
      {DAYS?.map((d, i) => (
        <Typography
          key={i}
          fontWeight={700}
          className={value?.includes(i) ? 'active' : ''}
          onClick={() =>
            setValue(value?.includes(i) ? value?.filter((v) => v !== i) : [...value, i])
          }
        >
          {d}
        </Typography>
      ))}
    </StyledDays>
  );
};

const StyledDays = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    cursor: pointer;
    color: #63738154;
    font-weight: bold;
    &.active {
      color: #212b36;
    }
  }
`;
