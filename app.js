import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// connecting mongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log('MongoDB connected..');

    // Staring server
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(express.json());

// Controllers
import {
  currentWeatherController,
  searchedLocationController,
} from './controllers/userLogController.js';
// Routes
// -- POST
// ---- POST User searched locations
app.post('/location', searchedLocationController);
// ---- POST Curren weather for selected location
app.post('/currentWeather', currentWeatherController);
