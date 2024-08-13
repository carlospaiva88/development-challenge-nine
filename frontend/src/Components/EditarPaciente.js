import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function EditarPaciente({ paciente, open, handleClose, handleSave }) {
const [formData, setFormData] = useState({ ...paciente });

useEffect(() => {
    setFormData({ ...paciente })
},[paciente])

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = () => {
handleSave(formData);
};

return (
<Dialog open={open} onClose={handleClose}>
    <DialogTitle>Editar Paciente</DialogTitle>
    <DialogContent>
    <TextField
        autoFocus
        margin="dense"
        name="nome"
        label="Nome do Paciente"
        value={formData.nome}
        onChange={handleChange}
        fullWidth
    />
    <TextField
        margin="dense"
        name="data_nascimento"
        label="Data de Nascimento"
        type="date"
        onChange={handleChange}
        fullWidth
        value={formData.data_nascimento ? new Date(formData.data_nascimento).toISOString().split('T')[0] : ''}
    />
    <TextField
        margin="dense"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
    />
    <TextField
        margin="dense"
        name="endereco"
        label="Endereço"
        value={formData.endereco}
        onChange={handleChange}
        fullWidth
    />
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose} color="primary">
        Cancelar
    </Button>
    <Button onClick={handleSubmit} color="primary">
        Salvar
    </Button>
    </DialogActions>
</Dialog>

);
}

export default EditarPaciente;
