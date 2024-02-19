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
import { setUserAndAuthToken } from '../../actions/userActions';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { setUserData } from '../../slices/userSlice';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors }, clearErrors} = useForm()
    const [loggedIn, setLoggedIn] = useState(false);

    const handleTyping = () => {
        clearErrors('email');
        clearErrors('password');
    };   
    
    const submitForm: SubmitHandler<FieldValues> = async (data) => {
        const loginSubmit = () => {
            try {
                accountLogin(data)
                    .subscribe(response => {
                        dispatch(setUserData({ email: response.data.email, token: response.data.token }));
                        setLoggedIn(true)
                    })                
            } catch (error) {
                console.error('Error logging in.', error)
            }
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
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus    
              {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email format' }})}
                error={!!errors.email }
                helperText={(errors?.email?.message ?? '') as string}
                onChange={handleTyping}
            />
            <TextField
              margin="normal"
              required
              fullWidth              
              label="Password"
              type="password"
              id="password"
              {...register('password', {required: 'Password is required'})}
              error={!!errors.password}
              helperText={(errors?.password?.message ?? '') as string}
              onChange={handleTyping}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
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
                <Link href="#" variant="body2">
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