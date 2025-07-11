import { Router } from 'express';
import { getSurveys, createSurvey, createResponses, getMetrics } from '../controllers/survey.controller';

const router = Router();

router.get('/surveys', getSurveys);
router.post('/surveys', createSurvey);
router.post('/responses', createResponses);
router.get('/metrics/:id', getMetrics); 

export default router;
