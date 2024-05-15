import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import { Pagination } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { StatusIcon } from 'src/assets/icons/status';
import settingIcon from 'src/assets/icons/setting.svg';
import splitIcon from 'src/assets/icons/split-cells.svg';

import Scrollbar from 'src/components/scrollbar';
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
    'LS-2330956',
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
  { id: 'type', label: 'Gerätetyp' },
  { id: 'name', label: 'Gerät NamePLZ' },
  { id: 'plz', label: 'PLZ' },
  { id: 'ort', label: 'Ort' },
  { id: 'condition', label: 'Zustand' },
  { id: 'battery', label: 'Akkuspannung' },
  { id: 'actions', label: 'Aktionen' },
  { id: 'status', label: 'Status', align: 'center' },
];

export const SurveillanceTable = () => {
  const table = useTable({
    defaultOrderBy: 'calories',
  });
  const navigate = useNavigate();

  const [tableData, setTableData] = useState<RowDataType[]>([]);

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
    <StyledSurveillanceTable>
      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
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
                  <TableRow hover key={row.id} className="row">
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.location}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.id}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.type}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.name}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.plz}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.ort}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.condition}
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')}>
                      {row.battery}
                    </TableCell>
                    <TableCell>
                      <div className="actions-cell">
                        <img src={splitIcon} alt="" />
                        <img src={settingIcon} alt="" />
                      </div>
                    </TableCell>
                    <TableCell onClick={() => navigate('/dashboard/standorte/1')} align="center">
                      <StatusIcon active={row.status} />
                    </TableCell>
                  </TableRow>
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
    </StyledSurveillanceTable>
  );
};

const StyledSurveillanceTable = styled.div`
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
    img {
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
`;