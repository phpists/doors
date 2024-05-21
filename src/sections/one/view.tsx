import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';

import { Header } from './Header';
import { ClientsTable } from './ClientsTable/ClientsTable';

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container style={{ maxWidth: '100%' }}>
      <Header />
      <ClientsTable />
    </Container>
  );
}
