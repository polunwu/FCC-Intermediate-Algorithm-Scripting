function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  function calcOrbitalPeriod(avgAlt) {
    return Math.round(Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = calcOrbitalPeriod(arr[i].avgAlt);
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
