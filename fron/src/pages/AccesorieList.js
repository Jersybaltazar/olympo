import React, { useState } from 'react';
import { Container, Typography, IconButton, TextField, Button } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';
import AccessoryCard from '../components/AccesoryCard'; // Crearemos este componente a continuación
import { Link } from 'react-router-dom';


const AccessoryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1); // Página actual
  const itemsPerPage = 3; // Cantidad de accesorios por página

  // Simulando la lista de accesorios desde la base de datos
  const accessoryList = [
    // ...tu lista de accesorios
  ];

  const filteredAccessories = accessoryList.filter(accessory =>
    accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAccessories.length / itemsPerPage);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedAccessories = filteredAccessories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container>
      <Typography variant="h4">Lista de Accesorios</Typography>
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          placeholder="Buscar accesorio"
        />
        <Button variant="contained">Hello world</Button>
        <IconButton component={Link} to="/create-accesory">
          <AddIcon />
        </IconButton>
      </div>
      {displayedAccessories.map(accessory => (
        <AccessoryCard key={accessory.id} accessory={accessory} />
      ))}
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default AccessoryList;
