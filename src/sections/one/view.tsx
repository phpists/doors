import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';

import { Header } from './Header';
import { ClientsTable } from './ClientsTable/ClientsTable';

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Header />
      <ClientsTable />
    </Container>
  );
}
