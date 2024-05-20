import styled from 'styled-components';
import { useState, Fragment, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Box, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';

import { ConnectIcon } from 'src/assets/icons/solar-energy-one';
import openIcon from 'src/assets/icons/reverse-operation-out.svg';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ManageDoorModal } from 'src/components/ManageDoorModal';
import { ConnectDoorModal } from 'src/components/ConnectDoorModal';
import { ManageDoorTimeModal } from 'src/components/ManageDoorTimeModal';
import {
  useTable,
  emptyRows,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';

type RowDataType = {
  name: string;
  id: string;
  type: string;
  target: string;
  ort: string;
  //   traffic: string;
  status: boolean;
  onlineDate: string;
};

function createData(
  name: string,
  id: string,
  type: string,
  target: string,
  ort: string,
  status: boolean,
  onlineDate: string
): RowDataType {
  return { name, id, type, target, ort, status, onlineDate };
}

const TABLE_DATA: RowDataType[] = [
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330956',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    true,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    false,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    true,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    false,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    true,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    false,
    '11.06.2024 / 12:34'
  ),
  createData(
    'Türe 1. UG, Zugang Nord',
    'LS-2330957',
    'Tür',
    'migros.tstgmbh.ch',
    '4622 Egerkingen',
    true,
    '11.06.2024 / 12:34'
  ),
];

const TABLE_HEAD = [
  { id: 'name', label: 'Geräte Name' },
  { id: 'id', label: 'Geräte ID', className: 'mobile-cell' },
  { id: 'type', label: 'Gerätetyp' },
  { id: 'target', label: 'Target', className: 'mobile-cell' },
  { id: 'ort', label: 'Ziel Ort', className: 'mobile-cell' },
  { id: 'traffic', label: 'Traffic', className: 'mobile-cell' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Aktionen', className: 'mobile-cell' },
  { id: 'onlineDate', label: 'Online seit', className: 'mobile-cell' },
];

export const IntegrationsTable = () => {
  const table = useTable({
    defaultOrderBy: 'calories',
  });

  const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [manageDoorModal, setManageDoorModal] = useState(false);
  const [manageDoorTimeModal, setManageDoorTimeModal] = useState(false);
  const [connectDoorModal, setConnectDoorModal] = useState<null | string>(null);
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
    <StyledIntegrationsTable>
      <ManageDoorModal open={manageDoorModal} onClose={() => setManageDoorModal(false)} />
      <ManageDoorTimeModal
        open={manageDoorTimeModal}
        onClose={() => setManageDoorTimeModal(false)}
      />
      <ConnectDoorModal
        open={!!connectDoorModal}
        onClose={() => setConnectDoorModal(null)}
        disconnect={connectDoorModal === 'active'}
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
                      className={` row ${activeRow === row.id && 'active-row'}`}
                    >
                      <TableCell>
                        <Box component="span" className="table-cell-text">
                          {row.name}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.id}
                        </Box>{' '}
                      </TableCell>
                      <TableCell>
                        <Box component="span" className="table-cell-text">
                          {row.type}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.target}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.ort}
                        </Box>{' '}
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <div className="traffic-cell">
                          <Box component="span" color="blue">
                            22k
                          </Box>
                          <Box component="span" color="red">
                            X 0
                          </Box>{' '}
                          <Box component="span" color="gray">
                            0
                          </Box>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="action-cell">
                          <Box component="span" color={row.status ? 'green' : 'black'}>
                            {row.status ? 'Verbunden' : 'Bereit'}
                          </Box>
                          <button
                            type="button"
                            className="table-arrow-more"
                            onClick={() => setActiveRow(activeRow === row.id ? null : row.id)}
                          >
                            <Iconify icon="mdi:arrow-down" />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <div className="action-cell">
                          <button
                            type="button"
                            onClick={() => setManageDoorModal(true)}
                            className="icon-btn"
                          >
                            <Iconify icon="material-symbols:settings" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setManageDoorTimeModal(true)}
                            className="icon-btn"
                          >
                            <Iconify icon="lucide:clock-3" />
                          </button>
                          <img src={openIcon} alt="" />
                          <button
                            className="icon-btn"
                            type="button"
                            onClick={() =>
                              setConnectDoorModal(row.id === 'LS-2330956' ? 'active' : 'notActive')
                            }
                          >
                            <ConnectIcon active={row.id === 'LS-2330956'} />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className="mobile-cell">
                        <Box component="span" className="table-cell-text">
                          {row.onlineDate}
                        </Box>{' '}
                      </TableCell>
                    </TableRow>
                    {activeRow === row.id ? (
                      <TableRow className="active-row mobile-row-wrapper">
                        <TableCell colSpan={6}>
                          <div className="cell-mobile-more">
                            {TABLE_HEAD?.filter((cell) => cell.className === 'mobile-cell')?.map(
                              (cell) => (
                                <Fragment key={cell.id}>
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {cell.label}
                                  </Typography>
                                  <Typography variant="body2" fontWeight={600}>
                                    {(() => {
                                      if (cell.id === 'actions') {
                                        return (
                                          <div className="action-cell">
                                            <button
                                              type="button"
                                              onClick={() => setManageDoorModal(true)}
                                              className="icon-btn"
                                            >
                                              <Iconify icon="material-symbols:settings" />
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() => setManageDoorTimeModal(true)}
                                              className="icon-btn"
                                            >
                                              <Iconify icon="lucide:clock-3" />
                                            </button>
                                            <img src={openIcon} alt="" />
                                            <button
                                              className="icon-btn"
                                              type="button"
                                              onClick={() =>
                                                setConnectDoorModal(
                                                  row.id === 'LS-2330956' ? 'active' : 'notActive'
                                                )
                                              }
                                            >
                                              <ConnectIcon active={row.id === 'LS-2330956'} />
                                            </button>
                                          </div>
                                        );
                                      }
                                      if (cell.id === 'traffic') {
                                        return (
                                          <div className="traffic-cell">
                                            <Box component="span" color="blue">
                                              22k
                                            </Box>
                                            <Box component="span" color="red">
                                              X 0
                                            </Box>{' '}
                                            <Box component="span" color="gray">
                                              0
                                            </Box>
                                          </div>
                                        );
                                      }
                                      return null;
                                    })()}
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
      {/* <Pagination count={10} showFirstButton showLastButton className="pagination" /> */}
    </StyledIntegrationsTable>
  );
};

const StyledIntegrationsTable = styled.div`
  margin-top: 20px;
  .row {
    cursor: pointer;
  }
  .traffic-cell {
    display: flex;
    align-items: center;
    gap: 5px;
    width: max-content;
  }
  .action-cell {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
      height: 21px;
      margin-bottom: 1px;
    }
    .icon-btn {
      background: none;
      padding: none;
      outline: none;
      border: none;
      height: max-content;
    }
    a {
      color: #212b36;
      height: 17px;
    }
    img,
    svg {
      cursor: pointer;
      transition: all 0.3s;
      flex-shrink: 0;
      &:hover {
        opacity: 0.5;
      }
    }
    button {
      flex-shrink: 0;
      white-space: nowrap;
      font-size: 11px;
      padding: 0;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  @media (max-width: 800px) {
    .notConnectBtn {
      display: none;
    }
    .active-row {
      td,
      p {
        font-size: 13px !important;
      }
    }
    .action-cell {
      justify-content: flex-end;
    }
  }
  .table-arrow-more {
    margin-left: auto;
  }
`;
