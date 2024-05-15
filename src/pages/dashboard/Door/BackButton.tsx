import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Iconify from 'src/components/iconify';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      <Iconify icon="tabler:arrow-left" />
      Zurück zu den Standorte & Überwachung
    </StyledBackButton>
  );
};

const StyledBackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 5px;
  color: #212b36;
  text-decoration: none;
  cursor: pointer;
`;
