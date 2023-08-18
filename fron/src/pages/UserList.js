import React, { useState , useEffect, useRef } from "react";
import {
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Search as SearchIcon, Add as AddIcon } from "@mui/icons-material";
// import AccessoryCard from "../components/AccesoryCard"; // Crearemos este componente a continuación
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const RightAlignedContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "36px",
  marginTop: "30px",
});

const UserList = () => {
  const [showSearchField, setShowSearchField]= useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1); // Página actual
  const itemsPerPage = 3; // Cantidad de accesorios por página

  const handleSearchClick =()  =>{
    setShowSearchField(!showSearchField);
  }
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
  // Simulando la lista de accesorios desde la base de datos
  const UserList = [
    // ...tu lista de accesorios
  ];

  const filteredAccessories = UserList.filter((accessory) =>
    accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          onClick={() => {
            alert("Creando Usuario ");
          }}
          variant="outlined"
          component={Link}
          to="/create-accesory"
          color="secondary"
          disableElevation
        >
          Crear usuario
        </Button>
       
      </RightAlignedContainer>

      <div>
        <Grid container alignItems="center">
          <Grid item xs={6}>


            <Typography variant="h6">Lista de Usuarios</Typography>
          </Grid>
          <Grid item xs={1} container justifyContent="flex-end">
            {showSearchField ?(
              <div ref={searchRef}>
                  <TextField
                  value={searchTerm}
                  onChange={(event)=>setSearchTerm(event.target.value)}
                  variant="outlined"
                  placeholder="Buscar U"
                />
                </div>
            ):(
            <IconButton>
              <SearchIcon onClick={handleSearchClick} />
            </IconButton>
            )}
          </Grid>
        </Grid>

       
      </div>
      
     
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

export default UserList;
