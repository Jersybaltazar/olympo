import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import { determineMaintenanceStatus } from "./AccesorieList";

const AccessoryDetailsPage = () => {
  const { code_QR } = useParams(); // Obtener el ID del accesorio de los parámetros de la URL

  const [accessoryDetails, setAccessoryDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/codeqr/qr/${encodeURIComponent(code_QR)}`)
      .then((response) => {
        setAccessoryDetails(response.data);
      })
      .catch((error) => {
        console.error("Error obteniendo detalles del accesorio", error);
      });
  }, [code_QR]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {accessoryDetails ? (
        <Card style={{ maxWidth: 400 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Detalles del Accesorio
            </Typography>
            <Typography variant="body1">
              Nombre: {accessoryDetails.name}
            </Typography>
            <Typography variant="body1">
              Marca: {accessoryDetails.brand}
            </Typography>
            <Typography variant="body1">
              Modelo: {accessoryDetails.model}
            </Typography>

            <Typography variant="body1">
              Precio: {accessoryDetails.price}
            </Typography>
            <Typography variant="body1">
              Partes: {accessoryDetails.parts}
            </Typography>
            <Typography variant="body1">
              induction: {accessoryDetails.induction}
            </Typography>
            <Typography variant="body1">
              frecuencia: {accessoryDetails.mantenimiento}
            </Typography>
            <Typography variant="body2">
              Estado de Mantenimiento:{" "}
              {determineMaintenanceStatus(accessoryDetails)}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Cargando detalles del accesorio...</Typography>
      )}
    </div>
  );
};

export default AccessoryDetailsPage;
