import { useState } from 'react';
import styled from '@emotion/styled';

import { Tab, Tabs } from '@mui/material';

import { SurveillanceTable } from './SurveillanceTable';

const TABS = [
  {
    value: 0,
    label: 'Überwachung',
  },
  //   {
  //     value: 1,
  //     label: 'Web-Zugriffskontrolle',
  //   },
];

export const Devices = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledDevices>
      <Tabs value={activeTab} onChange={(e, tab) => setActiveTab(tab)}>
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      <SurveillanceTable />
    </StyledDevices>
  );
};

const StyledDevices = styled.div``;
