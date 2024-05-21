import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState, Fragment, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import {
  useTable,
  emptyRows,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';

type RowDataType = {
  type: string;
  id: string;
  location: string;
  name: string;
  plz: number;
  ort: string;
  tel: string;
  devices: number;
};

function createData(
  type: string,
  id: string,
  location: string,
  name: string,
  plz: number,
  ort: string,
  tel: string,
  devices: number
): RowDataType {
  return { type, id, location, name, plz, ort, tel, devices };
}

const TABLE_DATA: RowDataType[] = [
  createData('building', '125277', '3', 'Migros AG', 8025, 'Zürich', '+79 978 56 72', 20),
  createData('test', '125272', '3', 'Migros AG', 8015, 'Zürich', '+79 978 56 72', 22),
  createData('test', '125273', '3', 'Migros AG', 8005, 'Zürich', '+79 978 56 72', 25),
];

const TABLE_HEAD = [
  { id: 'type', label: 'Typ' },
  { id: 'id', label: 'ID/Nummer', className: 'mobile-cell' },
  { id: 'location', label: 'Anzahl Standorte', className: 'mobile-cell' },
  { id: 'name', label: 'Name' },
  { id: 'plz', label: 'PLZ', className: 'mobile-cell' },
  { id: 'ort', label: 'Ort', className: 'mobile-cell' },
  { id: 'tel', label: 'Telefon', className: 'mobile-cell' },
  { id: 'devices', label: 'Anzahl Geräte', className: 'mobile-cell' },
  { id: 'actions', label: 'Aktionen' },
];

export const ClientsTable = () => {
  const navigate = useNavigate();
  const table = useTable({
    defaultOrderBy: 'calories',
  });

  const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [activeRow, setActiveRow] = useState<any>(null);

  useEffect(() => {
    setTableData(TABLE_DATA);
  }, []);

  function applyFilter({
    inputData,
    comparator,
  }: {
    inputData: RowDataType[];
    comparator: (a: any, b: any) => number;
  }) {
    const stabilizedThis = inputData.map((el, index) => [el, index] as const);

    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);

      if (order !== 0) return order;

      return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    return inputData;
  }

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
  });

  const denseHeight = table.dense ? 34 : 34 + 20;

  return (
    <StyledClientsTable>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <Table size={table.dense ? 'small' : 'medium'}>
            <TableHeadCustom
              order={table.order}
              orderBy={table.orderBy}
              headLabel={TABLE_HEAD}
              rowCount={dataFiltered.length}
              numSelected={table.selected.length}
              onSort={table.onSort}
            />

            <TableBody>
              {dataFiltered
                .slice(
                  table.page * table.rowsPerPage,
                  table.page * table.rowsPerPage + table.rowsPerPage
                )
                .map((row) => (
                  <Fragment key={row.id}>
                    <TableRow
                      hover
                      className={`${activeRow === row.id && 'active-row'}`}
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        e.detail === 2 && navigate('/dashboard/client/1')
                      }
                    >
                      <TableCell className="mobile-cell">
                        <Iconify
                          icon={row?.type === 'building' ? 'ph:building' : 'ion:person-sharp'}
                        />
                      </TableCell>
                      <TableCell>
                        {' '}
                        <Box component="span" className="table-cell-text">
                          {row.id}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.location}
                        </Box>{' '}
                      </TableCell>
                      <TableCell>
                        {' '}
                        <Box component="span" className="table-cell-text">
                          {row.name}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.plz}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.ort}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.tel}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.devices}
                        </Box>{' '}
                      </TableCell>
                      <TableCell>
                        <div className="row-actions">
                          <NavLink to="/dashboard/client/1">
                            <Iconify icon="mdi:eye" />
                          </NavLink>
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
                      <TableRow className="active-row mobile-row-wrapper">
                        <TableCell />
                        <TableCell colSpan={5}>
                          <div className="cell-mobile-more">
                            {TABLE_HEAD?.filter((cell) => cell.className === 'mobile-cell')?.map(
                              (cell) => (
                                <Fragment key={cell.id}>
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {cell.label}
                                  </Typography>
                                  <Typography variant="body2" fontWeight={600}>
                                    {row[cell.id as keyof RowDataType]}
                                  </Typography>
                                </Fragment>
                              )
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </Fragment>
                ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
              />
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </StyledClientsTable>
  );
};

const StyledClientsTable = styled.div`
  width: 100%;
  .row-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a {
      color: #212b36;
      height: 17px;
    }
    svg {
      cursor: pointer;
      transition: all 0.3s;
      flex-shrink: 0;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
