import styled from 'styled-components';
import { Fragment, useState } from 'react';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

type RowType = {
  id: number;
  title: string;
  address: string;
  count: number;
};

function createData(id: number, title: string, address: string, count: number) {
  return { id, title, address, count };
}

const TABLE_DATA: RowType[] = [
  createData(1, 'Gäupark', 'Hausimollstrasse 1', 14),
  createData(2, 'M- Oensingen', 'Hausimollstrasse 1', 4),
  createData(3, 'Gäupark', 'Hausimollstrasse ', 24),
  createData(1, 'Gäupark', 'Hausimollstrasse 1', 14),
  createData(2, 'M- Oensingen', 'Hausimollstrasse 1', 4),
  createData(3, 'Gäupark', 'Hausimollstrasse ', 24),
];

const TABLE_HEAD = [
  { id: 'id', label: 'PN', width: '1px' },
  { id: 'title', label: 'Titel' },
  { id: 'address', label: 'Adresse', className: 'mobile-cell' },
  { id: 'count', label: 'Anzahl Geräte ', className: 'small-cell' },
  { id: 'actions', label: 'Aktionen' },
];

// ----------------------------------------------------------------------

export const StandorteTable = () => {
  const [activeRow, setActiveRow] = useState<any>(null);

  return (
    <StyledStandorteTable>
      <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
        <Scrollbar>
          <Table size="small">
            <TableHeadCustom headLabel={TABLE_HEAD} />

            <TableBody>
              {TABLE_DATA.map((row) => (
                <Fragment key={row.id}>
                  <TableRow className={`${activeRow === row.id && 'active-row'}`}>
                    <TableCell>
                      <Box component="span" className="table-cell-text">
                        {row.id}
                      </Box>{' '}
                    </TableCell>
                    <TableCell>
                      <Box component="span" className="table-cell-text">
                        {row.title}
                      </Box>{' '}
                    </TableCell>
                    <TableCell className="mobile-cell">
                      <Box component="span" className="table-cell-text">
                        {row.address}
                      </Box>{' '}
                    </TableCell>
                    <TableCell>
                      <Box component="span" className="table-cell-text">
                        {row.count}
                      </Box>{' '}
                    </TableCell>
                    <TableCell>
                      <div className="row-actions">
                        <Iconify icon="ic:baseline-edit" />
                        <Iconify icon="mingcute:delete-3-fill" />
                        <button
                          type="button"
                          className="table-arrow-more"
                          onClick={() => setActiveRow(activeRow === row.id ? null : row.id)}
                        >
                          <Iconify icon="mdi:arrow-down" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                  {activeRow === row.id ? (
                    <TableRow className="active-row">
                      <TableCell colSpan={3}>
                        <div className="cell-mobile-more">
                          {TABLE_HEAD?.filter((cell) => cell.className === 'mobile-cell')?.map(
                            (cell) => (
                              <Fragment key={cell.id}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {cell.label}
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                  {row[cell.id as keyof RowType]}
                                </Typography>
                              </Fragment>
                            )
                          )}
                        </div>
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  ) : null}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </StyledStandorteTable>
  );
};
const StyledStandorteTable = styled.div`
  margin: 20px 0 20px;
  max-width: 90svw;
  overflow: auto;
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
  .small-cell {
    width: max-content;
  }
`;
