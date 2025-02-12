import express from 'express';
import { authverify } from '../common/auth/auth.controller';
import * as chatValidations from './chat.validations';
import * as groupControllers from './chat.group.controlers';

const groupRoutes  = express.Router();

// Group Routes 

groupRoutes
.post('/',chatValidations.createGroup, groupControllers.createGroup)
.get('/',groupControllers.getallGroups)
.post('/:id',groupControllers.sendgroupMsg)
.post('/member/:id',groupControllers.addMember)
export default groupRoutes;