import express from 'express';
import groupRoutes from './chat.group.routes';

const chatRoutes = express.Router();
chatRoutes.use('/group',groupRoutes)

chatRoutes
    .post('')

export default chatRoutes;
