import styled from 'styled-components';

import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ProfileInfoModal = ({ open, onClose }: Props) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Profileübersicht</DialogTitle>

    <DialogContent sx={{ color: 'text.secondary' }}>
      <StyledProfileInfoModal>
        <div className="footer-form">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Geräte Name
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            Sensor
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Geräte ID
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            LS-2330956
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Gerätetyp
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            Tor
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Target
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            migros.tstgmbh.ch
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ziel Ort
          </Typography>
          <div>
            <Typography variant="body2" fontWeight={600}>
              Hausimollstrasse 1
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              4622 Egerkingen
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              Schweiz
            </Typography>
          </div>
        </div>
      </StyledProfileInfoModal>
    </DialogContent>

    <DialogActions>
      <Button variant="contained" onClick={onClose} autoFocus>
        Schließen
      </Button>
    </DialogActions>
  </Dialog>
);

const StyledProfileInfoModal = styled.div`
  width: 100svw;
  max-width: 400px;
  overflow-x: hidden;
  .footer-form {
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    background: rgba(145, 158, 171, 0.08);
    display: grid;
    grid-template-columns: 100px 1fr;
  }
`;
