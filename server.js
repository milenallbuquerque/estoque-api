const express = require('express');
const estoqueRoutes = require('./src/routes/estoqueRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/estoque', estoqueRoutes);
app.use('/api/usuarios', userRoutes);

console.log(app._router?.stack);
app.listen(3000, () => {
    console.log('API rodando na porta 3000');
    console.log('Rota de usuários registrada em: /api/usuarios');
});
