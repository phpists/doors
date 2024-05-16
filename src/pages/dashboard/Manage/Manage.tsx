import { useState } from 'react';
import styled from 'styled-components';

import { Tab, Tabs, Typography } from '@mui/material';

import { IntegrationsTable } from './IntegrationsTable';

const TABS = [
  {
    value: 0,
    label: 'Integrationen',
  },
];

const Manage = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledManage>
      <Typography variant="h4" className="page-title">
        Geräteansicht
      </Typography>
      <Tabs value={activeTab} onChange={(e, tab) => setActiveTab(tab)} className="tabs-wrapper">
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      <IntegrationsTable />
    </StyledManage>
  );
};

const StyledManage = styled.div`
  padding: 0 10px;

  .tabs-wrapper {
    margin-bottom: 40px;
  }
`;

export default Manage;
