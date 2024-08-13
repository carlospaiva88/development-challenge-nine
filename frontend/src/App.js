import React from 'react';
import { Container } from '@mui/material'
import ListarPacientes from './Components/ListarPacientes'
import NavBar from './Components/NavBar'
import FormularioPaciente from './Components/FormularioPaciente';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarPacietes from './Components/BuscarPacientes';



function App() {
  
  return (
    <Router>
        <NavBar />
            <Container>
                <Routes>
                    <Route path="/buscar" element={<BuscarPacietes />} />
                    <Route path="/registro-pacientes" element={<FormularioPaciente />} />
                    <Route path="/tabela-pacientes" element={<ListarPacientes exibirTodos={true} />} />
                    
                </Routes>
            </Container>
    </Router>
);
}

export default App;
