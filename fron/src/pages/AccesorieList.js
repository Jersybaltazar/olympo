  import React, { useState, useEffect, useRef } from "react";
  import {
    Container,
    Typography,
    IconButton,
    TextField,
    Button,
    Grid,
  } from "@mui/material";
  import { Search as SearchIcon, Add as AddIcon } from "@mui/icons-material";
  import AccessoryCard from "../components/AccesoryCard"; // Crearemos este componente a continuación
  import { Link } from "react-router-dom";
  import { styled } from "@mui/system";

  const RightAlignedContainer = styled(Container)({
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "36px",
    marginTop: "30px",
  });

  const AccessoryList = () => {
    const [showSearchField, setShowSearchField] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [accessoryList, setAccessoryList] = useState([]);
    const [page, setPage] = useState(1); // Página actual
    const itemsPerPage = 3; // Cantidad de accesorios por página

    const handleSearchClick = () => {
      setShowSearchField(!showSearchField);
    };
    const searchRef = useRef(null);
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setShowSearchField(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

    useEffect(() => {
      // Hacer la solicitud GET al endpoint para obtener la lista de accesorios
      fetch("http://localhost:3001/accesories/all")
        .then((response) => response.json())
        .then((data) => {
          // Aquí debes convertir el Blob de la imagen en una URL para el accesorio
          const accesoriesWithImagesUrl = data.map((accessory) => {
            if (accessory.img) {
              const imageUrl = `data:image/jpeg;base64,${accessory.img}`;
              return { ...accessory, img: imageUrl };
            }
            return accessory;
          });
          setAccessoryList(accesoriesWithImagesUrl);
        })
        .catch((error) =>
          console.error("Error obteniendo la lista de accesorios:", error)
        );
    }, []);


    const handleDeleteClick = async (id) => {
      try {
        const response = await fetch(`http://localhost:3001/accesories/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          // Realiza cualquier acción adicional después de eliminar (por ejemplo, recargar la lista)
        } else {
          console.error('Error al eliminar el accesorio');
        }
      } catch (error) {
        console.error('Error al eliminar el accesorio:', error);
      }
    };

    const filteredAccessories = accessoryList.filter((accessory) =>
      accessory.name && accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredAccessories.length / itemsPerPage);

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handlePageChange = (newPage) => {
      setPage(newPage);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const displayedAccessories = filteredAccessories.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <Container maxWidth="lg" fixed={true}>
        <RightAlignedContainer>
          <Button
            variant="outlined"
            component={Link}
            to="/create-accesory"
            color="secondary"
            disableElevation
          >
            Crear accesorio
          </Button>
        </RightAlignedContainer>

        <div>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h6">Lista de Accesorios</Typography>
            </Grid>
            <Grid d item xs={6} container justifyContent="flex-end">
              {showSearchField ? (
                <div ref={searchRef}>
                  <TextField
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    variant="outlined"
                    placeholder="Buscar accesorio"
                  />
                </div>
              ) : (
                <IconButton>
                  <SearchIcon onClick={handleSearchClick} />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={8}>
          {displayedAccessories.map((accessory) => (
            <Grid item xs={4} key={accessory.id}>
              <AccessoryCard
                key={accessory.id}
                accessory={accessory}
                onDelete={handleDeleteClick}
                // onUpdate={handleUpdateClick}
              />
            </Grid>
          ))}
        </Grid>
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
