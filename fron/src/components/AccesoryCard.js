import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const AccessoryCard = ({ accessory }) => {
  const { id, name, brand, purchaseDate, maintenanceStatus, image } = accessory;

  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Marca: {brand}</Typography>
        <Typography variant="body2">Fecha de Compra: {purchaseDate}</Typography>
        <Typography variant="body2">Estado de Mantenimiento: {maintenanceStatus}</Typography>
        <Button variant="outlined" color="secondary">Eliminar</Button>
        <Button variant="outlined" color="primary">Actualizar</Button>
      </CardContent>
    </Card>
  );
};

export default AccessoryCard;
