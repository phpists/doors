import { useState } from 'react';
import styled from 'styled-components';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

import { Row } from './Row';
import { RowType } from './types';
import { TABLE_HEAD } from './contants';

// ----------------------------------------------------------------------

function createData(
  name: string,
  dateFrom: string,
  dateTo: string,
  hoursFrom: string,
  hoursTo: string,
  status: string
): RowType {
  return { name, dateFrom, dateTo, hoursFrom, hoursTo, status };
}

const TABLE_DATA: RowType[] = [
  createData('Test 1', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
  createData('Test 2', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
  createData('Test 3', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
];

// ----------------------------------------------------------------------

export const ManageTable = () => {
  const [activeRow, setActiveRow] = useState<any>(null);

  return (
    <StyledManageTable>
      <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
        <Scrollbar>
          <Table size="small">
            <TableHeadCustom headLabel={TABLE_HEAD} />

            <TableBody>
              {TABLE_DATA.map((row, i) => (
                <Row
                  key={i}
                  active={activeRow === i}
                  onChangeActiveRow={() => setActiveRow(activeRow === i ? null : i)}
                  row={row}
                />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </StyledManageTable>
  );
};

const StyledManageTable = styled.div`
  .action-cell {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .field-text {
    width: 80px;
  }
  .select-wrapper {
    width: 80px;
  }
  .date-field {
    width: 120px;
    height: 37px;
  }
  .hours-field {
    min-width: 70px;
    input {
      padding: 10px;
    }
  }
  @media (max-width: 900px) {
    .field-text,
    .select-wrapper,
    .date-field,
    .hours-field {
      width: 100%;
    }
  }
`;
