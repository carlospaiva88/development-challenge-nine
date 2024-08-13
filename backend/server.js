// configura as rotas no servidor back-end. 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg'); // Importa o módulo pg

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configura a conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',      
    host: 'localhost',
    database: 'medcloud',        
    password: 'chokurei',      
    port: 5432,
    });


    //ENDPOINTS\\

    // Endpoint para obter todos os pacientes
    // logica para retornar os pacientes
    app.get('/api/pacientes', async (req, res) => {
    try {
    const result = await pool.query('SELECT * FROM pacientes');
    res.json(result.rows);
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
    }
    });

    // Endpoint para adicionar um novo paciente
    // logica para adicionar um novo paciente

    app.post('/api/pacientes', async (req, res) => {
    const { nome, data_nascimento, email, endereco } = req.body;
    try {
    const result = await pool.query(
        'INSERT INTO pacientes (nome, data_nascimento, email, endereco) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, data_nascimento, email, endereco]
    );
    res.status(201).json(result.rows[0]);
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
    }
    });

    // Endpoint para atualizar/editar dados de um novo paciente
    // logica para atualizar/editar um novo paciente

    app.put('/api/pacientes/:id', async (req, res) => {
        const { id } = req.params;
        const { nome, data_nascimento, email, endereco } = req.body;
        try {
            const result = await pool.query(
                'UPDATE pacientes SET nome = $1, data_nascimento = $2, email = $3, endereco = $4 WHERE id = $5 RETURNING *',
                [nome, data_nascimento, email, endereco, id]
            );
            res.json(result.rows[0]);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erro no servidor');
        }
    });

    // Endpoint para deletar um novo paciente
    // logica para deletar um novo paciente
    
    app.delete('/api/pacientes/:id', async (req, res) => {
        const { id } = req.params;
        try {
            await pool.query('DELETE FROM pacientes WHERE id = $1', [id]);
            res.status(204).send(); // No Content
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Erro no servidor');
        }
    });
    
     // Iniciar o servidor
     app.listen(5000, () => {
        console.log('Servidor rodando na porta 5000');
        });
    