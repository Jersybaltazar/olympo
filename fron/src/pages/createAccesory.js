import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import '@mui/x-date-pickers/dist/DatePicker.css';

const CreateAccessory = () => {

  const [logo, setLogoImage] = useState(null); // Aquí podrías manejar la imagen del logo o QR
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [qrSize, setQrSize] = useState('100');

  const handleGenerateQR = () => {
    // Lógica para generar el QR y actualizar el estado del logo
    // ...
  };

  const handleCreateAccessory = () => {
    // Lógica para crear el accesorio en la base de datos
    // ...
  };

  const handleQrSizeChange = (event) => {
    setQrSize(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  //renderizamiento del formulario los label e inputs
  const renderTextField = (label, id) => (
    <Grid container spacing={1} style={{ alignItems: 'center' }}>
      <Grid item xs={4}>
        <Typography variant="body1">{label}</Typography>
      </Grid>

      {id === 'codeqr' && (
        <Grid item xs={8} container spacing={1} alignItems="center">
          <Grid item>
            <FormControl fullWidth >
              <InputLabel >  </InputLabel>
              <Select
                value={qrSize}
                onChange={handleQrSizeChange}
                style={{ width: '100%' }}
              >
                <MenuItem value="100">Pequeño</MenuItem>
                <MenuItem value="200">Mediano</MenuItem>
                <MenuItem value="300">Grande</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item>
          <Button variant="outlined" onClick={handleGenerateQR}>
            Generar QR
          </Button>
        </Grid>
      </Grid>


      )}
      {id !== 'codeqr' && (
        <Grid item xs={8}>
          <FormControl fullWidth margin="normal">
            {id === 'fecha-trabajo' ? (
              <DatePicker
                label="Escoja una fecha"
                sx={{

                  width: '40%',
                  height: '80%'
                }}
                value={selectedDate}
                onChange={(handleDateChange)}
                renderInput={(params) => <TextField {...params} />}
              />
            ) : (

              <Input id={id} sx={{

                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
                width: '80%',
                height: '40px'
              }}
              />
            )}
          </FormControl>
        </Grid>
      )}
    </Grid>
  );

  const renderImageField = (label, id) => (
    <Grid container spacing={1} style={{ alignItems: 'center' }}>
      <Grid item xs={4}>
        <Typography variant="body1">{label}</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth margin="normal">
          <input
            accept="image/*"
            id={id}
            type="file"
            onChange={handleImageChange} // Asegúrate de definir esta función
            style={{ display: 'none' }}
          />
          <label htmlFor={id}>
            <Button variant="outlined" component="span">
              Seleccionar Imagen
            </Button>
          </label>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
            </div>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );



  return (
    <Container style={{ marginTop: '100px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={4}>
          <Grid item xs={4} style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Aquí podrías mostrar el logo o QR generado */}
            {logo ? (
              <img src={logo} alt="QR Code" style={{ width: '100%', height: 'auto' }} />
            ) : (
              <Typography variant="h5" align='center'>olympo</Typography>
            )}
          </Grid>

          <Grid item xs={8} style={{ paddingLeft: '16px' }}>
            {/* <Typography variant="h4">Crear Nuevo Accesorio</Typography> */}
            <form>

              {renderTextField('Nombre:', 'nombre')}
              {renderTextField('Marca:', 'marca')}
              {renderTextField('Modelo:', 'modelo')}
              {renderTextField('Fecha Trabajo:', 'fecha-trabajo')}
              {renderTextField('Precio:', 'precio')}
              {renderTextField('Piezas:', 'piezas')}
              {renderTextField('Modo de uso:', 'modo-uso')}
              {renderImageField('Imagen:', 'imagen')}
              {renderTextField('Mantenimiento:', 'mantenimiento')}
              {renderTextField('Codeqr:', 'codeqr')}
            
            </form>
          
         
          </Grid>
        </Grid >
        <Button variant="contained" onClick={handleCreateAccessory}style={{ marginTop: '20px' }}>
              Crear 
        </Button>
      </LocalizationProvider>
    </Container>
  );
};

export default CreateAccessory;
