import { Button, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import ListarPacientes from './ListarPacientes'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const BuscarPacientes = () => {

   const [consultaPaciente, setConsultaPaciente] = useState('')
   const [mostrarTabela, setMostrarTabela] = useState(false)
   const [openSnackbar, setOpenSnackbar] = useState(false)
   const [mensagemErro, setMensagemErro] = useState('')

   const handleSearch = () => {
      if (consultaPaciente.trim() === ''){
         setMensagemErro('Por favor digite o nome de algum paciente!')
         setOpenSnackbar(true)
         setMostrarTabela(false) 
      } else {
         setMostrarTabela(true)
      }
      
   }
   const handleCloseSnackbar = () => { 
      setOpenSnackbar(false)
   }


   return (
      <>
            <Typography variant="h4" mt={8} mb={8} align="center">
               Consultar Pacientes
            </Typography>
            <TextField
               autoFocus
               margin="dense"
               name="nome"
               label="Consulte algum Paciente"
               fullWidth
               onChange={(e) => setConsultaPaciente(e.target.value)} 
               required
            />
            <Button onClick={handleSearch} color="primary">
               Pesquisar
            </Button>
            {mostrarTabela && <ListarPacientes filtroNome={consultaPaciente} exibirTodos={false} /> }
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
               <Alert onClose={handleCloseSnackbar} severity="error">
                  {mensagemErro}
               </Alert>
            </Snackbar>
            
      </>
      
   )
   
}


export default BuscarPacientes
