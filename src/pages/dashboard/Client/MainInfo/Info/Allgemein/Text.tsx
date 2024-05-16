import styled from '@emotion/styled';

import { Divider, Typography } from '@mui/material';

export const Text = () => (
  <StyledText>
    <div className="text-group">
      <div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Adresse
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Pfingstweidstrasse
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              101
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              8005 Zürich
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              Schweiz
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ID/Nummer
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              1252346457
            </Typography>
          </div>
        </div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Anrede
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Genossenschaft Migros Zürich
            </Typography>
          </div>
        </div>
      </div>
    </div>
    <Divider className="divider" />
    <div className="text-group">
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
      <div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            E-Mail
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              m-infoline@migros.ch
            </Typography>
          </div>
        </div>
        <div className="text-group-item">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Webseite
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              www.migros.ch
            </Typography>
          </div>
        </div>
      </div>
    </div>
    <div className="text-group-item note">
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Notice
      </Typography>
      <div>
        <Typography variant="body2" fontWeight={600}>
          Aliquet ac leo proin blandit quisque viverra est tellus. Notice
        </Typography>
      </div>
    </div>
  </StyledText>
);

const StyledText = styled.div`
  .text-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .text-group-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }
  .divider {
    margin: 20px 0;
  }
  .note {
    margin-top: 30px;
  }
  @media (max-width: 800px) {
    .text-group {
      grid-template-columns: 1fr;
    }
  }
`;
