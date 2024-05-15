import styled from 'styled-components';

import { Avatar, Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

export const Header = () => (
  <StyledHeader>
    <Avatar color="warning" className="avatar">
      M
    </Avatar>
    <div>
      <Typography className="title">Migros AG</Typography>
      <div className="status-wrapper">
        <Iconify icon={true ? 'ph:building' : 'ion:person-sharp'} />
        <Button size="small" color="success" variant="contained">
          Aktive
        </Button>
      </div>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  margin: 20px 0 30px;
  display: flex;
  align-items: center;
  .avatar {
    width: 75px;
    height: 75px;
    font-size: 40px;
    margin-right: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .status-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
