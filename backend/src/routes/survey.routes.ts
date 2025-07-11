import { Router } from 'express';
import { getSurveys, createSurvey, createResponses } from '../controllers/survey.controller';

const router = Router();

router.get('/surveys', getSurveys);
router.post('/surveys', createSurvey);
router.post('/responses', createResponses);

export default router;
