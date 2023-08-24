import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const AccessoryDetails = () => {
  const { codeQR } = useParams();
  const [accessory, setAccessory] = useState(null);

  useEffect(() => {
    // Hacer la solicitud GET al endpoint para obtener los detalles del accesorio
    fetch(`http://localhost:3001/accesories/byqrcode/${codeQR}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (data.img) {
            const imageUrl = `data:image/jpeg;base64,${data.img}`;
            setAccessory({ ...data, img: imageUrl });
          } else {
            setAccessory(data);
          }
        }
      })
      .catch((error) => console.error("Error obteniendo los detalles del accesorio:", error));
  }, [codeQR]);

  if (!accessory) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4">Cargando...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Detalles del Accesorio</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={accessory.img} alt="Accessory" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Nombre: {accessory.name}</Typography>
          <Typography>Marca: {accessory.brand}</Typography>
          <Typography>Modelo: {accessory.model}</Typography>
          {/* Agrega más detalles aquí */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccessoryDetails;
