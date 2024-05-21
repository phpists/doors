import styled from 'styled-components';

import { Avatar, Typography } from '@mui/material';

export const ClientInfo = () => (
  <StyledClientInfo>
    <div className="header">
      <Avatar color="warning">M</Avatar> <Typography variant="h6">Migros AG</Typography>
    </div>
    <div className="info-wrapper">
      <div>
        <Typography variant="subtitle2" fontWeight={600} className="main-info">
          Genossenschaft Migros Zürich <br />
          Pfingstweidstrasse 101 <br />
          8005 Zürich <br />
          Schweiz
        </Typography>
      </div>
      <div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Telefon 1
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              +41058 561 51 11
            </Typography>
          </div>
        </div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Telefon 2
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              +41058 561 51 22
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </StyledClientInfo>
);

const StyledClientInfo = styled.div`
  .info-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .main-info {
    margin-bottom: 20px;
  }
  .text-group-item {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 10px;
  }
`;
