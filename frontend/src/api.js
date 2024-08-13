
export const enviarDadosPaciente = async (paciente) => {
try {
    const response = await fetch('http://localhost:5000/api/pacientes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(paciente),
    });

    if (!response.ok) {
    throw new Error('Erro ao salvar o paciente');
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
}
};

export const obterPacientes = async () => {
try {
    const response = await fetch('http://localhost:5000/api/pacientes');
    if (!response.ok) {
    throw new Error('Erro ao obter pacientes');
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
}
};
