import { Server } from 'socket.io';
import http from 'http';

// Declare the server and socket instance in a module
let io: Server;

export const setupSocket = (server: http.Server): void => {
  io = new Server(server, {
    cors: {
      origin: process.env.FE_BASE_URL, // Allow access from this origin
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    }
  });
};

export const getSocket = (): Server | undefined => {
  return io;
};
