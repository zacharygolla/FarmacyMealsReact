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
import { setUserData } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { accountRegister } from '../../services/AuthService';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: { errors }, clearErrors, setError} = useForm()
  const [registered, setRegistered] = useState(false);

  const handleTyping = (id: string) => {
    clearErrors(id);        
  };     

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    const registerSubmit = () => {
            accountRegister(data)
                .subscribe({
                  next: response => {
                    dispatch(
                      setUserData({ 
                        firstName: response.data.firstName, 
                        email: response.data.email, 
                        token: response.data.token 
                      }));
                    setRegistered(true);
                  },
                  error: error => {
                    if (error.response && error.response.data.errors.DuplicateEmail) {
                      // Display error message in the email field
                      setError('email', {
                        type: 'manual',
                        message: 'Email already exists.',
                      });
                    } else {
                      console.error('Error logging in:', error);
                    }
                  }
                  })                                
    }
    registerSubmit();
  };    

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box alignItems="center">
          <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', paddingBottom: '4px', '@media (min-width: 768px)': { paddingBottom: '7px' } }} tabIndex={-1}>
            Create an account
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.54)', paddingLeft: '8px', paddingRight: '8px' }}>
            Join Farmacy Meals to get access to track current orders and see previous ones, get access to special discounts and offers, and receive updates on the latest news and updates to our menus.            
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
                  InputLabelProps={{
                    sx: { "&.Mui-focused": { color: "inherit" } },
                  }}
                  {...register('firstName', { required: 'First name is required' })}
                    error={!!errors.firstName }
                    helperText={(errors?.firstName?.message ?? '') as string}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  InputLabelProps={{
                    sx: { "&.Mui-focused": { color: "inherit" } },
                  }}
                  {...register('lastName', { required: 'Last name is required' })}
                    error={!!errors.lastName }
                    helperText={(errors?.lastName?.message ?? '') as string}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  InputLabelProps={{
                    sx: { "&.Mui-focused": { color: "inherit" } },
                  }}
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email format' }})}
                    error={!!errors.email }
                    helperText={(errors?.email?.message ?? '') as string}
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
                  InputLabelProps={{
                    sx: { "&.Mui-focused": { color: "inherit" } },
                  }}
                  {...register('password', {required: 'Password is required'})}
                    error={!!errors.password}
                    helperText={(errors?.password?.message ?? '') as string}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="default" />}
                  label="receive updates on the latest news and updates to Farmacy Meals menus."
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
                <Link href="/login" variant="body2" color='inherit'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          {registered && <Navigate to="/" />}
        </Box>
      </Container>
      </>
  );
}
export default Register;