import React, { useState } from 'react';
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
import { setAuthToken } from '../../actions/authActions';

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const[credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleCredentialChange = (event: any) => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value});
    }

    const handleCredentialSubmit = (event: any) => {
        console.log('test')
        event.preventDefault();
        const loginSubmit = async () => {
            try {
                accountLogin(credentials)
                    .subscribe(response => {
                        dispatch(setAuthToken(response.data.token));
                })                
            } catch (error) {
                console.error('Error logging in.', error)
            }
        }
        loginSubmit();
    }

    return (
        <Container component={Paper} maxWidth="xs" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4}}>        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleCredentialSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleCredentialChange}
              value={credentials.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleCredentialChange}
              value={credentials.password}
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
        </Container>
    );
}
export default Login;