import {
  CurrentWeatherModel,
  SearchedLocationModel,
} from '../models/userLogModel.js';

export const searchedLocationController = (req, res) => {
  console.log('Searched locations', req.body);
  const newLocation = new SearchedLocationModel(req.body);
  newLocation
    .save()
    .then((data) => res.status(200).send('succesful'))
    .catch((err) => console.log(err));
};

export const currentWeatherController = (req, res) => {
  console.log(req.body);
  const newWeather = new CurrentWeatherModel(req.body);
  newWeather
    .save()
    .then((data) => res.status(200).send('succesful'))
    .catch((err) => console.log(err));
};
