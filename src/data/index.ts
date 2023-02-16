import { IPlanet } from '../types';

const coef = 20;

const Planets: IPlanet[] = [
  {
    orbitalSpeed: 9 - 47.36 / coef,
    orbitDimensions: 40,
    speedAroundAxis: 3,
    planetImg: '/img/mercury.png',
  },
  {
    orbitalSpeed: 9 - 35.02 / coef,
    orbitDimensions: 50,
    speedAroundAxis: 3,
    planetImg: '/img/venus.png',
  },
  {
    orbitalSpeed: 9 - 26.71 / coef,
    orbitDimensions: 60,
    speedAroundAxis: 3,
    planetImg: '/img/earth.png',
  },
  {
    orbitalSpeed: 9 - 24.13 / coef,
    orbitDimensions: 70,
    speedAroundAxis: 3,
    planetImg: '/img/mars.png',
  },
  {
    orbitalSpeed: 9 - 13.07 / coef,
    orbitDimensions: 80,
    speedAroundAxis: 3,
    planetImg: '/img/jupiter.png',
  },
  {
    orbitalSpeed: 9 - 9.69 / coef,
    orbitDimensions: 90,
    speedAroundAxis: 3,
    planetImg: '/img/saturn.png',
  },
  {
    orbitalSpeed: 9 - 6.81 / coef,
    orbitDimensions: 100,
    speedAroundAxis: 3,
    planetImg: '/img/uranus.png',
  },
  {
    orbitalSpeed: 9 - 5.43 / coef,
    orbitDimensions: 110,
    speedAroundAxis: 3,
    planetImg: '/img/neptune.png',
  },
  {
    orbitalSpeed: 9 - 4.66 / coef,
    orbitDimensions: 120,
    speedAroundAxis: 3,
    planetImg: '/img/pluto.png',
  },
];

export default Planets;
