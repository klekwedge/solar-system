export default function getRandomCoord(orbitDimensions: number) {
  const radius = orbitDimensions * 8;

  const x0 = radius;
  const y0 = radius;

  const x = Math.floor(Math.random() * (radius + 1));
  const y = Math.floor(Math.sqrt(radius ** 2 - (x - x0) ** 2) + y0);

  const left = Math.floor(Math.random() * 2);
  const top = Math.floor(Math.random() * 2);

  let styles;

  if (left) {
    styles = {
      left: `${x}px`,
    };
  } else {
    styles = {
      right: `${x}px`,
    };
  }

  if (top) {
    styles = {
      ...styles,
      top: `${y}px`,
    };
  } else {
    styles = {
      ...styles,
      bottom: `${y}px`,
    };
  }

  return styles;
}



// ! HORIZ
/* left='0'
top='50%' ||| bottom
transform='translateX(-50%)' */

/* right='0'
top='50%' ||| bottom
transform='translateX(50%)' */


// ! VERTICAL
/* left='50%' ||| right
bottom='0'
transform='translateY(50%)' */

/* left='50%' ||| right
top='0'
transform='translateY(-50%)' */



export function getStandardCoord() {
  const isLeft = !!Math.floor(Math.random() * 2);
  const isTop = !!Math.floor(Math.random() * 2);
  const isHorizontal = !!Math.floor(Math.random() * 2);

  let styles;

  if (isHorizontal && isLeft) {
    if (isTop) {
      styles = { left: '0', top: '50%', transform: 'translateX(-50%)' };
    } else {
      styles = { left: '0', bottom: '50%', transform: 'translateX(-50%)' };
    }
  } else if (isHorizontal && !isLeft) {
    if (isTop) {
      styles = { right: '0', top: '50%', transform: 'translateX(50%)' };
    } else {
      styles = { right: '0', bottom: '50%', transform: 'translateX(50%)' };
    }
  } else if (!isHorizontal && isLeft) {
    if (isTop) {
      styles = { left: '50%', top: '0', transform: 'translateY(-50%)' };
    } else {
      styles = { left: '50%', bottom: '0', transform: 'translateY(50%)' };
    }
  } else if (!isHorizontal && !isLeft)  {
    if (isTop) {
      styles = { right: '50%', top: '0', transform: 'translateY(-50%)' };
    } else {
      styles = { right: '50%', bottom: '0', transform: 'translateY(50%)' };
    }
  }

  return styles;
}
