import { createMemebers, getMembers, getMembersByChurchId, updateMembers, deleteMembers} from '../controllers/membersControllers.js';
import { Router } from 'express';
let membersRouter = Router();

membersRouter.post('/create/members', createMemebers)
membersRouter.get('/members', getMembers)
membersRouter.get('/members/:id', getMembersByChurchId)
membersRouter.put('/update/members/:id', updateMembers)
membersRouter.put('/delete/members/:id', deleteMembers)

export default membersRouter;  