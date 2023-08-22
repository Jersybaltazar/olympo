import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const AccessoryCard = ({ accessory, onDelete }) => {

  const { id_accesorie, name, brand, purchase_date, maintenanceStatus, img } = accessory;

  const handleDeleteClick = () => {
    // Llamar a la función onDelete y pasarle el ID del accesorio a eliminar
    onDelete(id_accesorie);
  };
  

  // const handleUpdateClick = () => {
  //   // Llamar a la función onUpdate y pasarle el ID del accesorio a actualizar
  //   onUpdate(id_accesorie);
  // };

  return (
    <Card>
      <CardMedia component="img" height="100" image={img} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Marca: {brand}</Typography>
        <Typography variant="body2">Fecha de Compra: {purchase_date}</Typography>
        <Typography variant="body2">Estado de Mantenimiento: {maintenanceStatus}</Typography>
        <Button variant="outlined" color="secondary" onClick={handleDeleteClick}>Eliminar</Button>
        <Button variant="outlined" color="primary" >Actualizar</Button> 
      </CardContent>
    </Card>
  );
};

export default AccessoryCard;
