import { createMemebers, getMembers, getMembersByChurchId, updateMembers, deleteMembers, downloadExcel} from '../controllers/membersControllers.js';
import { Router } from 'express';
let membersRouter = Router();

membersRouter.post('/create/members', createMemebers)
membersRouter.get('/members', getMembers)
membersRouter.get('/members/:id', getMembersByChurchId)
membersRouter.put('/update/members/:id', updateMembers)
membersRouter.delete('/delete/members/:id', deleteMembers)
membersRouter.get('/download/excel', downloadExcel)

export default membersRouter;  