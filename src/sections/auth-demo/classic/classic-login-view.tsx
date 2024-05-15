import * as Yup from 'yup';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ClassicLoginView() {
  const password = useBoolean();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">Als bestehender Benutzer anmelden</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">
          Bitte melden Sie sich an, um die Türen zu verwalten und zu überwachen. Falls Sie keine
          Anmeldedaten haben, wenden Sie sich bitte direkt an den Systemadministrator, um diese zu
          erhalten.
        </Typography>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <StyledAuth spacing={2.5}>
      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box className="form-footer">
        <FormControlLabel
          control={<Checkbox size="medium" color="default" />}
          label="Remember me"
          sx={{ textTransform: 'capitalize' }}
        />
        <Link
          component={RouterLink}
          href={paths.authDemo.classic.forgotPassword}
          variant="body2"
          color="inherit"
          underline="always"
        >
          Passwort vergessen?
        </Link>
      </Box>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        onClick={() => navigate('/verify')}
      >
        Anmelden
      </LoadingButton>
    </StyledAuth>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}

const StyledAuth = styled(Stack)`
  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
