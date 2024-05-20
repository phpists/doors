import styled from 'styled-components';

import { Card, CardHeader, CardContent } from '@mui/material';

import { Footer } from './Footer';
import { ManageTable } from './ManageTable/ManageTable';

export const ManageDoorTime = () => (
  <StyledManageDoorTime>
    <Card>
      <CardHeader title="Türe 7. UG, Zugang Nord" />
      <CardContent className="card-content-wrapper">
        <ManageTable />
      </CardContent>
    </Card>
    <Footer />
  </StyledManageDoorTime>
);

const StyledManageDoorTime = styled.div`
  padding: 20px;
  background-color: rgba(145, 158, 171, 0.08);
  max-width: 950px;
  @media (max-width: 500px) {
    padding: 10px;
    .card-content-wrapper {
      padding: 10px;
    }
  }
`;
