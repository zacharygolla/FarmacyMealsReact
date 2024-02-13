import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";

const leftLinks = [
    { title: 'Menu', path: '/menu' }
]

const rightLinks = [
    { title: 'Login', path: '/login' },
]

const navStyles = {
    color: 'inherit', '&:hover': { color: 'gray' }, '&.active': { color: 'secondary.main' }
}

const Navbar: React.FC = () => {
    return (
        <>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="h6" component={NavLink} to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>Farmacy Meals</Typography>                    <List sx={{ display: 'flex' }}>
                            {leftLinks.map((({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path} sx={{ ...navStyles, typography: 'h6' }}>
                                    {title.toUpperCase()}
                                </ListItem>
                            )))}
                        </List>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map((({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path} sx={{ ...navStyles, typography: 'h6' }}>
                                    {title.toUpperCase()}
                                </ListItem>
                            )))}
                        </List>
                        <IconButton size="large" edge='start' color='inherit' sx={{ mr: 2 }}>
                            <Badge badgeContent='4' color='secondary' component={NavLink} to='/cart' sx={{ ...navStyles, textDecoration: 'none' }}>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar
