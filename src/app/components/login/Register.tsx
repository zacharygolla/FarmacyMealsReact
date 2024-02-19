import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { accountLogin, accountRegister } from '../../services/AuthService';
import { setUserData } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: { errors }, clearErrors} = useForm()
  const [registered, setRegistered] = useState(false);

  const handleTyping = () => {
    clearErrors('firstName');
    clearErrors('lastName');
    clearErrors('email');
    clearErrors('password');
  };  

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    const registerSubmit = () => {
        try {
            accountRegister(data)
                .subscribe(response => {
                    dispatch(setUserData({ firstName: response.data.firstName, email: response.data.email, token: response.data.token }));
                    setRegistered(true);
                })                              
        } catch (error) {
            console.error('Error logging in.', error)
        }
    }
    registerSubmit();
  };    

  return (
    <>
      <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmit(submitForm)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register('firstName', { required: 'First name is required', pattern: { value: /^[a-zA-Z]/,
                    message: 'A-Z' }})}
                    error={!!errors.firstName }
                    helperText={(errors?.firstName?.message ?? '') as string}
                    onChange={handleTyping}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register('lastName', { required: 'Last name is required', pattern: { value: /^[a-zA-Z]/,
                    message: 'Last name must be letters only' }})}
                    error={!!errors.lastName }
                    helperText={(errors?.lastName?.message ?? '') as string}
                    onChange={handleTyping}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email format' }})}
                    error={!!errors.email }
                    helperText={(errors?.email?.message ?? '') as string}
                    onChange={handleTyping}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password', {required: 'Password is required'})}
                    error={!!errors.password}
                    helperText={(errors?.password?.message ?? '') as string}
                    onChange={handleTyping}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          {registered && <Navigate to="/" />}
      </Container>
      </>
  );
}
export default Register;