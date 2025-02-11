import { getSocket } from './chat.socket'

export const emitMessage = (event: string, message: any) => {
  const io = getSocket();
  io?.on('connection',(socket)=>{
    console.log(socket);
  })
  if (io) {
    // Emit an event to all connected clients
    io.emit(event, message);
  }
  io?.on('chat',(msg)=>{
    console.log(msg);
  })
};
