import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { enviarDadosPaciente } from '../api'
import Button from '@mui/material/Button'
import { Box, Grid, TextField, Typography } from '@mui/material'




function FormularioPaciente({ onAddPaciente }) {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
    event.preventDefault()

    const paciente = {
        nome: event.target.nome.value,
        data_nascimento: event.target.dataNascimento.value,
        email: event.target.email.value,
        endereco: event.target.endereco.value,
    }

    try {
        const data = await enviarDadosPaciente(paciente)
        navigate('/tabela-pacientes')
        setMessage('Paciente salvo com sucesso!')
        setOpen(true)
        onAddPaciente(data) // Atualiza a lista de pacientes no App
        event.target.reset() // Limpa o formulário após o envio
        console.log('Paciente salvo com sucesso:', data)
    } catch (error) {
        setMessage('Erro ao salvar o paciente!')
        console.error('Erro ao salvar o paciente:', error)
    }
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
                mt: 4, 
                mb: 4, 
                mx: 'auto', 
                width: '50%',
                textAlign: 'center'
            }}
        >
            <Typography variant="h4" mt={8} mb={8} gutterBottom>
                Registro de Pacientes
            </Typography>
            <Grid container spacing={2} mb={8}>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="Nome do Paciente"
                        name="nome"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        label="Endereço"
                        name="endereco"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        label="Data de Nascimento"
                        name="dataNascimento"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6} mb={8}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}


export default FormularioPaciente;
