// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db',  
    database: 'medcloud',
    password: 'chokurei',
    port: 5432,
});

module.exports = pool;
