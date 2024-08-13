import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Navbar() {

    const navigate = useNavigate()

    return (
        
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Button onClick={() => navigate('/registro-pacientes')} color="inherit">Registro</Button>
                <Button onClick={() => navigate('/buscar')} color="inherit">Buscar</Button>
                <Button onClick={() => navigate('/tabela-pacientes')} color="inherit">Tabela</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
