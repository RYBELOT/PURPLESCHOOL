let positionLatitude = 10;
let positionLongitude = 10;
let destinationLatitude = 23;
let destinationLongitude = 23;
let distance = 0;

distance = Math.sqrt((destinationLatitude - positionLatitude)**2 + (destinationLongitude - positionLongitude)**2);
console.log(Math.round(distance));