import { Fragment } from 'react';

import { MobileTimePicker } from '@mui/x-date-pickers';
import { TableRow, MenuItem, TableCell, TextField, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

import { Days } from './Days';
import { RowType } from './types';
import { TABLE_HEAD } from './contants';

interface Props {
  row: RowType;
  active: boolean;
  onChangeActiveRow: () => void;
}

const renderMobileCell = (type: string): any => {
  switch (type) {
    case 'name':
      return <TextField variant="outlined" size="small" className="field-text " />;
    case 'dateFrom':
    case 'dateTo':
      return (
        <TextField type="date" variant="outlined" size="small" fullWidth className="date-field" />
      );
    case 'days':
      return <Days />;
    case 'hoursFrom':
    case 'hoursTo':
      return <MobileTimePicker className="hours-field" views={['hours', 'minutes']} ampm={false} />;

    default:
      return null;
  }
};

export const Row = ({ row, active, onChangeActiveRow }: Props) => (
  <>
    <TableRow key={row.name} className={active ? 'active-row' : ''}>
      <TableCell>
        <TextField
          variant="outlined"
          size="small"
          defaultValue={row.name}
          className="field-text "
        />
      </TableCell>
      <TableCell className="mobile-cell">
        {/* {row.dateFrom} */}
        <TextField type="date" variant="outlined" size="small" fullWidth className="date-field" />
      </TableCell>
      <TableCell className="mobile-cell">
        {' '}
        <TextField type="date" variant="outlined" size="small" fullWidth className="date-field" />
      </TableCell>
      <TableCell className="mobile-cell">
        <Days />
      </TableCell>
      <TableCell className="mobile-cell">
        {' '}
        <MobileTimePicker className="hours-field" views={['hours', 'minutes']} ampm={false} />
      </TableCell>
      <TableCell className="mobile-cell">
        <MobileTimePicker className="hours-field" views={['hours', 'minutes']} ampm={false} />
      </TableCell>
      <TableCell>
        <div className="action-cell">
          <TextField
            variant="outlined"
            select
            value="Auto"
            className="select-wrapper"
            // onChange={handleChangeCurrency}
            size="small"
          >
            <MenuItem value="Auto">Auto </MenuItem>
            <MenuItem value="Auto1">Auto </MenuItem>
            <MenuItem value="Auto2">Auto </MenuItem>
          </TextField>
          <button type="button" className="table-arrow-more" onClick={onChangeActiveRow}>
            <Iconify icon="mdi:arrow-down" />
          </button>
        </div>
      </TableCell>
    </TableRow>
    {active ? (
      <TableRow className="active-row mobile-row-wrapper">
        <TableCell colSpan={5}>
          <div className="cell-mobile-more">
            {TABLE_HEAD?.filter((cell) => cell.className === 'mobile-cell')?.map((cell) => (
              <Fragment key={cell.id}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {cell.label}
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {renderMobileCell(cell.id)}
                </Typography>
              </Fragment>
            ))}
          </div>
        </TableCell>
      </TableRow>
    ) : null}
  </>
);
