import { IPlanet } from '../types';

const orbitalSpeedCoef = 20;
const speedAroundAxisCoef = 24;

const Planets: IPlanet[] = [
  {
    orbitalSpeed: 9 - 47.36 / orbitalSpeedCoef,
    orbitDimensions: 40,
    speedAroundAxis: 5 + 58,
    planetImg: '/img/mercury.png',
  },
  {
    orbitalSpeed: 9 - 35.02 / orbitalSpeedCoef,
    orbitDimensions: 50,
    speedAroundAxis: 5 + 243,
    planetImg: '/img/venus.png',
  },
  {
    orbitalSpeed: 9 - 26.71 / orbitalSpeedCoef,
    orbitDimensions: 60,
    speedAroundAxis: 5 + 24 / orbitalSpeedCoef,
    planetImg: '/img/earth.png',
  },
  {
    orbitalSpeed: 9 - 24.13 / orbitalSpeedCoef,
    orbitDimensions: 70,
    speedAroundAxis: 5 + 24 / orbitalSpeedCoef,
    planetImg: '/img/mars.png',
  },
  {
    orbitalSpeed: 9 - 13.07 / orbitalSpeedCoef,
    orbitDimensions: 80,
    speedAroundAxis: 5 + 9 / orbitalSpeedCoef,
    planetImg: '/img/jupiter.png',
  },
  {
    orbitalSpeed: 9 - 9.69 / orbitalSpeedCoef,
    orbitDimensions: 90,
    speedAroundAxis: 5 + 10 / orbitalSpeedCoef,
    planetImg: '/img/saturn.png',
  },
  {
    orbitalSpeed: 9 - 6.81 / orbitalSpeedCoef,
    orbitDimensions: 100,
    speedAroundAxis: 5 + 17 / orbitalSpeedCoef,
    planetImg: '/img/uranus.png',
  },
  {
    orbitalSpeed: 9 - 5.43 / orbitalSpeedCoef,
    orbitDimensions: 110,
    speedAroundAxis: 5 + 16 / orbitalSpeedCoef,
    planetImg: '/img/neptune.png',
  },
  {
    orbitalSpeed: 9 - 4.66 / orbitalSpeedCoef,
    orbitDimensions: 120,
    speedAroundAxis: 5 + 154 / orbitalSpeedCoef,
    planetImg: '/img/pluto.png',
  },
];

export default Planets;
