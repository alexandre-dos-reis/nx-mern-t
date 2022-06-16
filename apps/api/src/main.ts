import express from 'express';
import { workoutRoutes } from './routes/workout';
// Express App
const app = express();

// Middlewares
app.use(express.json()); // Body parser
app.use((req, res, next) => {
  console.log(`Req to ${req.path} ${req.method} ${res.statusCode}`);
  next();
});

const prefix = '/api';

// Routes
app.use(`${prefix}/workouts`, workoutRoutes);

const port = process.env.API_PORT;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
