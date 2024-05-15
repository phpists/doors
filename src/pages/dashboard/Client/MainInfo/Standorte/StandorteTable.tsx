import styled from 'styled-components';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

function createData(id: number, title: string, address: string, count: number) {
  return { id, title, address, count };
}

const TABLE_DATA = [
  createData(1, 'Gäupark', 'Hausimollstrasse 1, 4622 Egerkingen', 14),
  createData(1, 'M- Oensingen', 'Hausimollstrasse 1, 4622 Egerkingen', 4),
  createData(1, 'Gäupark', 'Hausimollstrasse 1, 4622 Egerkingen', 24),
];

const TABLE_HEAD = [
  { id: 'id', label: 'PN', width: '1px' },
  { id: 'title', label: 'Titel' },
  { id: 'address', label: 'Adresse' },
  { id: 'count', label: 'Anzahl Geräte ' },
  { id: 'actions', label: 'Aktionen' },
];

// ----------------------------------------------------------------------

export const StandorteTable = () => (
  <StyledStandorteTable>
    <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
      <Scrollbar>
        <Table>
          <TableHeadCustom headLabel={TABLE_HEAD} />

          <TableBody>
            {TABLE_DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>
                  <div className="row-actions">
                    <Iconify icon="ic:baseline-edit" />
                    <Iconify icon="mingcute:delete-3-fill" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>
  </StyledStandorteTable>
);

const StyledStandorteTable = styled.div`
  margin: 20px 0 20px;
  .row-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
