import { Router } from 'express';
import { getSurveys, createSurvey } from '../controllers/survey.controller';

const router = Router();

router.get('/surveys', getSurveys);
router.post('/surveys', createSurvey);

export default router;
