import mongoose from 'mongoose';

const searchedLocationSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  searchedLocation: {
    type: String,
    required: true,
  },
});
export const SearchedLocationModel = mongoose.model(
  'searched_locations',
  searchedLocationSchema
);

const currentWeatherSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  weather: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
export const CurrentWeatherModel = mongoose.model(
  'current_weather',
  currentWeatherSchema
);
