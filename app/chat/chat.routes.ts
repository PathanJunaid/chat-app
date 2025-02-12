import express from 'express';
import groupRoutes from './chat.group.routes';
import * as chatValidations from './chat.validations';
import * as chatControllers from './chat.controllers'
const chatRoutes = express.Router();
chatRoutes.use('/group',groupRoutes)

chatRoutes
    // send msg payload recieverEmail, msg
    .get('/',chatValidations.sendmsg, chatControllers.sendmsg)
    .post('/',chatValidations.getmsgs, chatControllers.getmsgofUser)
    
export default chatRoutes;
