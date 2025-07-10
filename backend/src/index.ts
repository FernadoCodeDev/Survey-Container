import express from 'express';
//import dotenv from 'dotenv';
import surveyRoutes from './routes/survey.routes'; 

//dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando 🚀'));

app.use('/api', surveyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
