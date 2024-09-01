import app from './app';

const PORT = process.env.DEVELOPMENT_PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}...`);
});
