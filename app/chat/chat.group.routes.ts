import express from 'express';
import { authverify } from '../common/auth/auth.controller';
import { createGroup } from './chat.group.controlers';

const groupRoutes  = express.Router();

groupRoutes
.post('/',createGroup);

export default groupRoutes;