import { IPlanet } from '../types';

const orbitalSpeedCoef = 20;
// const speedAroundAxisCoef = 24;
const orbitDimensionsCoef = 10;

const Planets: IPlanet[] = [
  {
    orbitalSpeed: 9 - 47.36 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 2,
    speedAroundAxis: 5 + 58,
    planetImg: '/img/mercury.png',
    size: 35,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 35.02 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 3,
    speedAroundAxis: 5 + 243,
    planetImg: '/img/venus.png',
    size: 40,
    isClockwise: true,
  },
  {
    orbitalSpeed: 9 - 26.71 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 4,
    speedAroundAxis: 5 + 24 / orbitalSpeedCoef,
    planetImg: '/img/earth.png',
    size: 40,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 24.13 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 5,
    speedAroundAxis: 5 + 24 / orbitalSpeedCoef,
    planetImg: '/img/mars.png',
    size: 37.5,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 13.07 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 7,
    speedAroundAxis: 5 + 9 / orbitalSpeedCoef,
    planetImg: '/img/jupiter.png',
    size: 75,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 9.69 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 8,
    speedAroundAxis: 5 + 10 / orbitalSpeedCoef,
    planetImg: '/img/saturn.png',
    size: 65,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 6.81 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 9,
    speedAroundAxis: 5 + 17 / orbitalSpeedCoef,
    planetImg: '/img/uranus.png',
    size: 50,
    isClockwise: true,
  },
  {
    orbitalSpeed: 9 - 5.43 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 10,
    speedAroundAxis: 5 + 16 / orbitalSpeedCoef,
    planetImg: '/img/neptune.png',
    size: 45,
    isClockwise: false,
  },
  {
    orbitalSpeed: 9 - 4.66 / orbitalSpeedCoef,
    orbitDimensions: orbitDimensionsCoef * 11,
    speedAroundAxis: 5 + 154 / orbitalSpeedCoef,
    planetImg: '/img/pluto.png',
    size: 35,
    isClockwise: false,
  },
];

export default Planets;
