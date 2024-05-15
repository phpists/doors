import { useState } from 'react';
import styled from 'styled-components';

import { Tab, Tabs } from '@mui/material';

import { AccessControl } from './AccessControl';
import { Allgemein } from './Allgemein/Allgemein';

const TABS = [
  {
    value: 0,
    label: 'Allgemein',
  },
  {
    value: 1,
    label: 'Web-Zugriffskontrolle',
  },
];

export const Info = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledInfo>
      <div>
        <Tabs value={activeTab} onChange={(e, tab) => setActiveTab(tab)}>
          {TABS.slice(0, 3).map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>
        {activeTab === 0 ? <Allgemein /> : <AccessControl />}
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.div``;
