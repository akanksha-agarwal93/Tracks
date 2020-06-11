import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
      timestamp: 10000000,
      coords: {
          speed: 0, 
          heading: 0,
          accuracy: 5,
        altitude: 5,
        longitude: 72.87565246224403 + increment * tenMetersWithDegrees,
        latitude: 19.15093038659959 + increment * tenMetersWithDegrees,
      }
  };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.LocationChanged', {
        
    })
}, 1000);
