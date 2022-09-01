import { getAllChurches, getAllChurchesByGroupId } from '../controllers/churchesController.js';
import { Router } from 'express';
let churchesRouter = Router();

churchesRouter.get('/churches', getAllChurches)
churchesRouter.get('/churches/:id', getAllChurchesByGroupId)
export default churchesRouter;