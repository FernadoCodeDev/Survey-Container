import express from 'express';
import cors from 'cors';

import surveyRoutes from './routes/survey.routes'; 

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando 🚀'));

app.use('/api', surveyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
