import { IPlanet } from '../types';

const coef = 20;

const Planets: IPlanet[] = [
  {
    radius: 3,
    orbitalSpeed: 9 - 47.36 / coef,
    orbitDimensions: 40,
    speedAroundAxis: 3,
    planetImg: '/img/mercury.png',
  },
  {
    radius: 4,
    orbitalSpeed: 9 - 35.02 / coef,
    orbitDimensions: 50,
    speedAroundAxis: 3,
    planetImg: '/img/venus.png',
  },
  {
    radius: 5,
    orbitalSpeed: 9 - 26.71 / coef,
    orbitDimensions: 60,
    speedAroundAxis: 3,
    planetImg: '/img/earth.png',
  },
  {
    radius: 6,
    orbitalSpeed: 9 - 24.13 / coef,
    orbitDimensions: 70,
    speedAroundAxis: 3,
    planetImg: '/img/mars.png',
  },
  {
    radius: 7,
    orbitalSpeed: 9 - 13.07 / coef,
    orbitDimensions: 80,
    speedAroundAxis: 3,
    planetImg: '/img/jupiter.png',
  },
  {
    radius: 8,
    orbitalSpeed: 9 - 9.69 / coef,
    orbitDimensions: 90,
    speedAroundAxis: 3,
    planetImg: '/img/saturn.png',
  },
  {
    radius: 9,
    orbitalSpeed: 9 - 6.81 / coef,
    orbitDimensions: 100,
    speedAroundAxis: 3,
    planetImg: '/img/uranus.png',
  },
  {
    radius: 10,
    orbitalSpeed: 9 - 5.43 / coef,
    orbitDimensions: 110,
    speedAroundAxis: 3,
    planetImg: '/img/neptune.png',
  },
  {
    radius: 11,
    orbitalSpeed: 9 - 4.66 / coef,
    orbitDimensions: 120,
    speedAroundAxis: 3,
    planetImg: '/img/pluto.png',
  },
];

export default Planets;
