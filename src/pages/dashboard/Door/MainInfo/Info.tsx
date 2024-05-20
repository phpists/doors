import styled from '@emotion/styled';

import { Typography } from '@mui/material';

export const Info = () => (
  <StyledInfo>
    <div>
      <div className="text-group">
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Gerätetyp
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Tür{' '}
            </Typography>
          </div>
        </div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Gerät Name
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Türe 7. UG, Zugang Nord
            </Typography>
          </div>
        </div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Geräte ID
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              LS-2330943
            </Typography>
          </div>
        </div>
      </div>
      <div className="text-group">
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Standortadresse
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Hausimollstrasse 1
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              4622 Egerkingen
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              CH Schweiz
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </StyledInfo>
);

const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  .statistics-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .text-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .text-group-item {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 10px;
  }
  .card-statistic {
    padding: 20px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
