import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState, Fragment, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { Box, Pagination, Typography } from '@mui/material';

import { StatusIcon } from 'src/assets/icons/status';
import splitIcon from 'src/assets/icons/split-cells.svg';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ManageDoorModal } from 'src/components/ManageDoorModal';
import { ManageDoorTimeModal } from 'src/components/ManageDoorTimeModal';
import {
  useTable,
  emptyRows,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';

type RowDataType = {
  location: string;
  id: string;
  type: string;
  name: string;
  plz: number;
  ort: string;
  condition: string;
  battery: string;
  status: boolean;
};

function createData(
  location: string,
  id: string,
  type: string,
  name: string,
  plz: number,
  ort: string,
  condition: string,
  battery: string,
  status: boolean
): RowDataType {
  return { location, id, type, name, plz, ort, condition, battery, status };
}

const TABLE_DATA: RowDataType[] = [
  createData(
    'Gäupark',
    'LS-2330956',
    'Tür',
    'Türe 1. UG, Zugang Nord',
    4622,
    'Egerkingen',
    'Türe verriegelt',
    '28.0 VDC',
    true
  ),
  createData(
    'Gäupark',
    'LS-2330957',
    'Tür',
    'Türe 1. UG, Zugang Nord',
    4622,
    'Egerkingen',
    'Türe verriegelt',
    '28.0 VDC',
    true
  ),
  createData(
    'Gäupark',
    'LS-2330958',
    'Tür',
    'Türe 1. UG, Zugang Nord',
    4622,
    'Egerkingen',
    'Türe verriegelt',
    '28.0 VDC',
    true
  ),
  createData(
    'Gäupark',
    'LS-2330959',
    'Tür',
    'Türe 1. UG, Zugang Nord',
    4622,
    'Egerkingen',
    'Türe verriegelt',
    '28.0 VDC',
    false
  ),
];

const TABLE_HEAD = [
  { id: 'location', label: 'Standort' },
  { id: 'id', label: 'Gerätet ID' },
  { id: 'type', label: 'Gerätetyp', className: 'mobile-cell' },
  { id: 'name', label: 'Gerät NamePLZ', className: 'mobile-cell' },
  { id: 'plz', label: 'PLZ', className: 'mobile-cell' },
  { id: 'ort', label: 'Ort', className: 'mobile-cell' },
  { id: 'condition', label: 'Zustand', className: 'mobile-cell' },
  { id: 'battery', label: 'Akkuspannung', className: 'mobile-cell' },
  { id: 'actions', label: 'Aktionen' },
  { id: 'status', label: 'Status', align: 'center' },
];

export const DoorsTable = () => {
  const table = useTable({
    defaultOrderBy: 'calories',
  });
  const navigate = useNavigate();

  const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [activeRow, setActiveRow] = useState<any>(null);
  const [manageDoorModal, setManageDoorModal] = useState(false);
  const [manageDoorTimeModal, setManageDoorTimeModal] = useState(false);

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
    <StyledDoorsTable>
      <ManageDoorModal open={manageDoorModal} onClose={() => setManageDoorModal(false)} />
      <ManageDoorTimeModal
        open={manageDoorTimeModal}
        onClose={() => setManageDoorTimeModal(false)}
      />
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
                      key={row.id}
                      className={`row ${activeRow === row.id && 'active-row'}`}
                    >
                      <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                        <Box component="span" className="table-cell-text">
                          {row.location}
                        </Box>{' '}
                      </TableCell>
                      <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                        {row.id}
                        <Box component="span" className="table-cell-text">
                          {row.id}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.type}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.name}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.plz}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.ort}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.condition}
                        </Box>{' '}
                      </TableCell>
                      <TableCell
                        className="mobile-cell"
                        onClick={() => navigate('/dashboard/standorte/1')}
                      >
                        <Box component="span" className="table-cell-text">
                          {row.battery}
                        </Box>{' '}
                      </TableCell>
                      <TableCell>
                        <div className="actions-cell">
                          <button type="button" onClick={() => setManageDoorModal(true)}>
                            <img src={splitIcon} alt="" />
                          </button>
                          <button type="button" onClick={() => setManageDoorTimeModal(true)}>
                            <Iconify icon="material-symbols:settings" />
                          </button>
                          <button
                            type="button"
                            className="table-arrow-more"
                            onClick={() => setActiveRow(activeRow === row.id ? null : row.id)}
                          >
                            <Iconify icon="mdi:arrow-down" />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell onClick={() => navigate('/dashboard/standorte/1')} align="center">
                        <StatusIcon active={row.status} />
                      </TableCell>
                    </TableRow>
                    {activeRow === row.id ? (
                      <TableRow className="active-row mobile-row-wrapper">
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
      <Pagination count={10} showFirstButton showLastButton className="pagination" />
    </StyledDoorsTable>
  );
};

const StyledDoorsTable = styled.div`
  margin-top: 20px;
  .row {
    cursor: pointer;
  }
  .actions-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a {
      color: #212b36;
      height: 17px;
    }
    img,
    svg {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  button {
    border: none;
    outline: none;
    border: none;
    background: none;
  }
`;
