import React, { useState, useEffect } from 'react';
import { obterPacientes } from '../api';
import EditarPaciente from './EditarPaciente';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { salvarPacientesNoCache } from '../utils/cache';

function ListaPacientes({ filtroNome, exibirTodos }) {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteParaEditar, setPacienteParaEditar] = useState(null);
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('');
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [pacienteParaDeletar, setPacienteParaDeletar] = useState(null);

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const data = await obterPacientes()
                setPacientes(data);
                salvarPacientesNoCache(data); // Atualiza o cache
            } catch (error) {
                console.error('Erro ao obter pacientes:', error);
            }
        };

        // Carrega a lista de pacientes do cache inicialmente
        if (pacientes.length === 0) {
            fetchPacientes();
        }
    }, [])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleEdit = (paciente) => {
        setPacienteParaEditar({ ...paciente });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async (formData) => {
        await fetch(`http://localhost:5000/api/pacientes/${formData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const updatedPacientes = pacientes.map(p => p.id === formData.id ? formData : p);
        setPacientes(updatedPacientes);
        salvarPacientesNoCache(updatedPacientes); // Atualiza o cache
        setMessage('O paciente foi atualizado com sucesso!');
        setOpen(false);
        setOpenSnackbar(true);
    };

    const handleDeleteClick = (id) => {
        setPacienteParaDeletar(id);
        setConfirmOpen(true);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    };

    const handleConfirmDelete = async () => {
        await fetch(`http://localhost:5000/api/pacientes/${pacienteParaDeletar}`, {
            method: 'DELETE',
        });
        const updatedPacientes = pacientes.filter(paciente => paciente.id !== pacienteParaDeletar);
        setPacientes(updatedPacientes);
        salvarPacientesNoCache(updatedPacientes); // Atualiza o cache
        setMessage('O paciente foi deletado com sucesso!');
        setConfirmOpen(false);
        setOpenSnackbar(true);
    }
    
    const pacientesFiltrados = exibirTodos 
    ? pacientes
    : pacientes.filter((paciente) => 
        paciente.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );
    return (
        <>

        <Typography variant='h4' align='center' mt={8} mb={8}>
            Tabela de Pacientes
        </Typography>
            <TableContainer sx={{ mb: 12 }} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Endereço</TableCell>
                            <TableCell>Data de Nascimento</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pacientesFiltrados.map((paciente) => (
                            <TableRow key={paciente.id}>
                                <TableCell>{paciente.nome}</TableCell>
                                <TableCell>{paciente.email}</TableCell>
                                <TableCell>{paciente.endereco}</TableCell>
                                <TableCell>{formatDate(paciente.data_nascimento)}</TableCell>
                                <TableCell>
                                    <IconButton color="info" onClick={() => handleEdit(paciente)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDeleteClick(paciente.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                    {message}
                </Alert>
            </Snackbar>

            {pacienteParaEditar && (
                <EditarPaciente
                    paciente={pacienteParaEditar}
                    open={open}
                    handleClose={() => setOpen(false)}
                    handleSave={handleSave}
                />
            )}

            <Dialog
                open={confirmOpen}
                onClose={handleConfirmClose}
            >
                <DialogTitle>Confirmação de Exclusão</DialogTitle>
                <DialogContent>
                    Tem certeza que deseja deletar este paciente?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Deletar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ListaPacientes;
