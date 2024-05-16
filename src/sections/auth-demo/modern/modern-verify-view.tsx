import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { EmailInboxIcon } from 'src/assets/icons';

import FormProvider, { RHFCode } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ModernVerifyView() {
  const VerifySchema = Yup.object().shape({
    code: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });
  const navigate = useNavigate();

  const defaultValues = {
    code: '',
    email: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit((data) => {
    navigate('/dashboard');
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   console.info('DATA', data);
    // } catch (error) {
    //   console.error(error);
    // }
  });

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <RHFCode name="code" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        onClick={() => navigate('/dashboard')}
      >
        Prüfen
      </LoadingButton>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Wenn Sie die App versehentlich von Ihrem Mobilgerät gelöscht haben oder den Zugriff auf Ihr
        Telefon verloren haben, geben Sie einfach den Einmalcode ein, den Sie bei der Aktivierung
        aufgeschrieben haben.
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Wenn Sie den Kratzcode verloren haben, stellen Sie bitte das Passwort für Ihre Telefonnummer
        wieder her.
      </Typography>
    </Stack>
  );

  const renderHead = (
    <>
      <EmailInboxIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h3">Zweifaktor-Authentifizierung </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Bitte geben Sie den Code von Ihrem Gerät ein.
        </Typography>
      </Stack>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
