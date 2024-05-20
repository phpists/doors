import styled from 'styled-components';

import Iconify from 'src/components/iconify';

import AnalyticsWidgetSummary from 'src/sections/overview/analytics/analytics-widget-summary';

export const Statistic = () => (
  <StyledStatistic>
    <div>
      <AnalyticsWidgetSummary
        title="Akkuspannung"
        subtitle="23.0 VDC"
        icon={
          <Iconify icon="streamline:computer-battery-full-1-phone-mobile-charge-device-electricity-power-battery-full" />
        }
        className="card-statistic"
        color="warning"
      />
    </div>
    <div>
      <AnalyticsWidgetSummary
        title="Öffnungs-Zyklen"
        subtitle="3 151"
        icon={<Iconify icon="ri:loop-right-fill" />}
        className="card-statistic"
      />
    </div>

    <div>
      <AnalyticsWidgetSummary
        title="Fehlerstatus"
        subtitle="Akku fehlerhaft"
        icon={<Iconify icon="material-symbols:error-circle-rounded" />}
        className="card-statistic"
        color="error"
      />
    </div>
    <div>
      <AnalyticsWidgetSummary
        title="Zustand"
        subtitle="Türe Zu"
        icon={<Iconify icon="majesticons:status-online-line" />}
        className="card-statistic"
        color="info"
      />
    </div>
  </StyledStatistic>
);

const StyledStatistic = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  .card-statistic {
    height: 100%;
    justify-content: center;
  }
  svg {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 800px) {
    .card-statistic {
      padding: 10px;
    }
  }
`;
