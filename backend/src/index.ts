import express from 'express';
import { PrismaClient } from '@prisma/client';
//import dotenv from "dotenv"

//dotenv.config(); 

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/encuestas', async (req, res) => {
  try {
    const surveys = await prisma.encuesta.findMany({
      include: { preguntas: true },
    });
    res.json(surveys);
  } catch (error) {
    console.error('Error al obtener encuestas:', error);
    res.status(500).json({ error: 'Error al obtener encuestas' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
