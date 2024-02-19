import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { UserFirstName } from '../../../selectors/Selectors';
import { setUserData } from '../../../slices/userSlice';
import { Link } from 'react-router-dom';

const SignedInMenu: React.FC = () => {
  const dispatch = useDispatch();
  const firstName = useSelector(UserFirstName);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(setUserData({ firstName: '', email: '', token: '' }))
  }

  return (
    <>
      <Button color='inherit' onClick={handleClick} sx={{typography: 'h6'}}>
        Hello, {firstName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
        <MenuItem component={Link} to="/orders" onClick={handleClose}>Orders</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </>
  );
}
export default SignedInMenu;