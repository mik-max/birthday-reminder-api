import { getAllChurches, getAllChurchesByGroupId, getAllChurchesByChurchId } from '../controllers/churchesController.js';
import { Router } from 'express';
let churchesRouter = Router();

churchesRouter.get('/churches', getAllChurches)
churchesRouter.get('/churches/:id', getAllChurchesByGroupId)
churchesRouter.get('/church/:id', getAllChurchesByChurchId)
export default churchesRouter;