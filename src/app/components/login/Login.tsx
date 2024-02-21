import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { accountLogin } from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { setUserData } from '../../slices/userSlice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const {register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm()
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);     

  useEffect(() => {
    const rememberMeFlag = localStorage.getItem('rememberMe');
    if (rememberMeFlag === 'true') {
      setRememberMe(true);
      const storedEmail = localStorage.getItem('email');
      setEmail(storedEmail ?? '');
    }
  }, []);

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setRememberMe(event.target.checked);
  };
    
  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    const loginSubmit = () => {
      accountLogin(data)    
        .subscribe({
          next: response => {
            dispatch(setUserData({ 
              firstName: response.data.firstName, 
              email: response.data.email,
              token: response.data.token 
            }));
            setLoggedIn(true)
            if (rememberMe) {
              localStorage.setItem('rememberMe', 'true');
              localStorage.setItem('email', response.data.email);
            } else {
              localStorage.removeItem('rememberMe');
              localStorage.removeItem('email');
            }
          },
          error: error => {
            if (error.response && error.response.data.title === "Unauthorized") {
              // Display error message in the email field              
              setError('email', { type: 'manual', message: '' });
              setError('password', {
                type: 'manual',
                message: 'Invalid Email or Password.',
              });
            } else {
              console.error('Error logging in:', error);
            }
          }
        })                                 
      }
      loginSubmit();
    };   

    return (
      <>
        <Container component={Paper} maxWidth="xs" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4}}>        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(submitForm)}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format'
                },
                onChange: () => {clearErrors('email')}
              })}
              error={!!errors.email}
              helperText={(errors?.email?.message ?? '') as string}
              onChange={() => {clearErrors('email')}}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...register('password', { 
                required: 'Password is required', 
                minLength: { 
                  value: 8, 
                  message: 'Password must be at least 8 characters long.' 
                },
                onChange: () => {clearErrors('password')}
              })}
              error={!!errors.password}
              helperText={(errors?.password?.message ?? '') as string}
            />
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={handleCheckboxChange} color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {loggedIn && <Navigate to="/" />}
        </Container>
      </>
    );
}
export default Login;

