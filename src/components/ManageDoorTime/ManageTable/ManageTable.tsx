import styled from 'styled-components';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

import { Days } from './Days';

// ----------------------------------------------------------------------

type Row = {
  name: string;
  dateFrom: string;
  dateTo: string;
  hoursFrom: string;
  hoursTo: string;
  status: string;
};

function createData(
  name: string,
  dateFrom: string,
  dateTo: string,
  hoursFrom: string,
  hoursTo: string,
  status: string
): Row {
  return { name, dateFrom, dateTo, hoursFrom, hoursTo, status };
}

const TABLE_DATA: Row[] = [
  createData('Test 1', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
  createData('Test 2', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
  createData('Test 3', '24.04.2024', '24.04.2024', '05:00', '09:00', 'AUTO'),
];

const TABLE_HEAD = [
  { id: 'name', label: 'Conf. Name' },
  { id: 'dateFrom', label: 'Start Datum' },
  { id: 'dateTo', label: 'Ende Datum' },
  { id: 'days', label: 'Wochentag' },
  { id: 'hoursFrom', label: 'Start Zeit' },
  { id: 'hoursTo', label: 'End Zeit' },
  { id: 'status', label: 'Funktion' },
];

// ----------------------------------------------------------------------

export const ManageTable = () => (
  <StyledManageTable>
    <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
      <Scrollbar>
        <Table size="small">
          <TableHeadCustom headLabel={TABLE_HEAD} />

          <TableBody>
            {TABLE_DATA.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dateFrom}</TableCell>
                <TableCell>{row.dateTo}</TableCell>
                <TableCell>
                  <Days />{' '}
                </TableCell>
                <TableCell>{row.hoursFrom}</TableCell>
                <TableCell>{row.hoursTo}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>
  </StyledManageTable>
);

const StyledManageTable = styled.div``;
