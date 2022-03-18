import { io } from 'socket.io-client';

require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default io(API_URL);
