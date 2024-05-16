import { useState } from 'react';
import styled from '@emotion/styled';

import { Tab, Tabs } from '@mui/material';

import { ManageDoor } from 'src/components/ManageDoor';
import { ManageDoorTime } from 'src/components/ManageDoorTime/ManageDoorTime';

const TABS = [
  {
    value: 0,
    label: 'Steuerung',
  },
  {
    value: 1,
    label: 'Zeitschaltung',
  },
];

export const Actions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledActions>
      <Tabs value={activeTab} onChange={(e, tab) => setActiveTab(tab)} className="tabs">
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      {activeTab === 0 ? <ManageDoor /> : <ManageDoorTime />}
    </StyledActions>
  );
};

const StyledActions = styled.div`
  .tabs {
    margin-bottom: 20px;
  }
`;
