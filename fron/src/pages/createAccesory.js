import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';


const CreateAccessory = () => {
  const [logo, setLogo] = useState(null); // Aquí podrías manejar la imagen del logo o QR

  const handleGenerateQR = () => {
    // Lógica para generar el QR y actualizar el estado del logo
    // ...
  };

  const handleCreateAccessory = () => {
    // Lógica para crear el accesorio en la base de datos
    // ...
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* Aquí podrías mostrar el logo o QR generado */}
          {logo ? (
            <img src={logo} alt="QR Code" />
          ) : (
            <Typography variant="h5">Logo</Typography>
          )}
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4">Crear Nuevo Accesorio</Typography>
          <form>
            <TextField label="Nombre" fullWidth />
            {/* Agrega más campos para los datos del accesorio */}
            <Button variant="outlined" onClick={handleGenerateQR}>
              Generar QR
            </Button>
            <Button variant="contained" onClick={handleCreateAccessory}>
              Crear Accesorio
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAccessory;
