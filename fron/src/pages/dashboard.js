import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessoryIcon from '@mui/icons-material/Extension';
import UserIcon from '@mui/icons-material/AccountBox';

const Dashboard = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton color="inherit" component={Link} to="/profile">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5">Accesorios con mantenimiento al día</Typography>
            {/* Aquí podrías mostrar la lista de accesorios con mantenimiento al día */}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Accesorios pendientes de mantenimiento</Typography>
            {/* Aquí podrías mostrar la lista de accesorios pendientes de mantenimiento */}
          </Grid>
        </Grid>
      </Container>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" component={Link} to="/accessory">
            <AccessoryIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/user">
            <UserIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
