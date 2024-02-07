/***

We have a list of drivers who drives for a generic company with their next trip information. Our goal is to write some queries 
to get some insights on the data. Each query will have one function and can have multiple supporting functions if needed.

Here is what looks like a driver object

{
  id: id of the driver
  first_name: first name of the driver
  last_name: last name of the driver
  start_time: time when the trip starts; time is in timestamp for easier representation
  duration: duration of the trip in minutes
  isInternational: boolean value if the trip is domestic or international
  cargo_types: types of cargo the trip is involved
}

*/

const listOfDrivers = [
  {
    id: 1001,
    first_name: 'Tony',
    last_name: 'Stark',
    start_time: 1707090842,
    duration: 45,
    isInternation: false,
    cargo_types: ['parcels', 'goods'],
  },
  {
    id: 1002,
    first_name: 'Thor',
    last_name: 'Odison',
    start_time: 1707090842,
    duration: 21650,
    isInternation: true,
    cargo_types: ['furniture', 'car', 'parcels'],
  },
  {
    id: 1003,
    first_name: 'Jack',
    last_name: 'Peralta',
    start_time: 1707090842,
    duration: 45,
    isInternation: true,
    cargo_types: ['car', 'parcels', 'goods'],
  },
  {
    id: 1004,
    first_name: 'Phil',
    last_name: 'Dunphy',
    start_time: 1707090842,
    duration: 145,
    isInternation: false,
    cargo_types: ['furniture', 'car', 'goods'],
  },
  {
    id: 1005,
    first_name: 'Thanos',
    last_name: 'Dione',
    start_time: 1707090842,
    duration: 45,
    isInternation: false,
    cargo_types: ['goods'],
  },
  {
    id: 1006,
    first_name: 'Charles',
    last_name: 'Boyle',
    start_time: 1707090842,
    duration: 450,
    isInternation: false,
    cargo_types: ['furniture'],
  },
  {
    id: 1007,
    first_name: 'Claire',
    last_name: 'Dunphy',
    start_time: 1707090842,
    duration: 700,
    isInternation: false, //
    cargo_types: ['furniture'],
  },
  {
    id: 1008,
    first_name: 'Steve',
    last_name: 'Rogers',
    start_time: 1707090842,
    duration: 345678,
    isInternation: true,
    cargo_types: ['furniture', 'goods', 'car', 'parcels'],
  },
  {
    id: 1009,
    first_name: 'Steve',
    last_name: 'Jobs',
    start_time: 1707090842,
    duration: 4555,
    isInternation: true,
    cargo_types: ['car', 'parcels'],
  },
  {
    id: 1010,
    first_name: 'Raka',
    last_name: 'Shaka',
    start_time: 1707090842,
    duration: 2500,
    isInternation: false,
    cargo_types: ['furniture', 'car'],
  },
];

// 1. Write a function to print all the drivers information.

const printAllDriversInformation = (drivers) => {
  drivers.map((driver) => {
    console.log(driver);
  });
};
printAllDriversInformation(listOfDrivers);

// 2. Given a driver id, write a function to return the matched driver.

const printDriverWithId = (drivers, id) => {
  const driverWithGivenId = drivers.find((driver) => driver.id === id);
  console.log(driverWithGivenId);
};
printDriverWithId(listOfDrivers, 1010);

// 3. Write a function to find the driver with the longest trip.

const findDriverWithLongestTrip = (drivers) => {
  let maxDuration = drivers[0].duration;
  for (let i = 1; i < drivers.length; i++) {
    if (maxDuration < drivers[i].duration) {
      maxDuration = drivers[i].duration;
    }
  }
  let driverWithLongestTrip = drivers.find(
    (driver) => driver.duration === maxDuration
  );
  console.log(
    `${driverWithLongestTrip.first_name} ${driverWithLongestTrip.last_name}`
  );
};

findDriverWithLongestTrip(listOfDrivers);

// 4. Write a function to find the driver with the shortest trip.

const findDriverWithShortestTrip = (drivers) => {
  let minDuration = drivers[0].duration;
  for (let i = 1; i < drivers.length; i++) {
    if (drivers[i].duration < minDuration) {
      minDuration = drivers[i].duration;
    }
  }
  let driversWithShortestTrip = drivers.filter(
    (driver) => driver.duration === minDuration
  );
  let driverList = driversWithShortestTrip.map(
    (driver) => `${driver.first_name} ${driver.last_name}`
  );
  console.log(driverList);
};

findDriverWithShortestTrip(listOfDrivers);

// 5. Write a function to sort the list of drivers from longest to shortest trip.

const sortDriversFromLargestToSmallestTrip = (drivers) =>
  drivers.sort((a, b) => b.duration - a.duration);

console.log(sortDriversFromLargestToSmallestTrip(listOfDrivers));

// 6. A wife called to look for husband and claiming the driver works here. Please write a function
//       to find the driver when a first name is given as parameters.

const findDriverWithFirstName = (drivers, firstName) => {
  const driver = drivers.filter(
    (driver) => driver.first_name.toLowerCase() === firstName.toLowerCase()
  );
  console.log(driver);
};

findDriverWithFirstName(listOfDrivers, 'thor');

// 7. More trouble coming in, police is now looking for a convict. They can provide any form of a full name format such as
//       "John Hansom" or "Hansom, John". Write a function to peform a search on the list of drivers
//       and return the driver if found matching. Return null if no one found.

const searchDriverWithFullName = (drivers, name) => {
  const driverName = drivers.find((driver) => {
    const fullName = driver.first_name + ' ' + driver.last_name;
    const fullName1 = driver.last_name + ', ' + driver.first_name;

    if (name === fullName) {
      return driver;
    } else if (name === fullName1) {
      return driver;
    } else {
      return null;
    }
  });
  console.log(driverName);
};

searchDriverWithFullName(listOfDrivers, 'Tony Stark');

// 8. How many drivers are making trips with cargo types of 'car'?

const countDriversTripWithCar = (drivers) => {
  let count = 0;
  drivers.map((driver) => {
    if (driver.cargo_types.indexOf('car') !== -1) {
      count++;
    }
  });
  return count;
};

console.log(countDriversTripWithCar(listOfDrivers));

// 9. We need a count on how many drivers are driving in domestic and internation? Output will be something like this:
//   {
//     international: 4,
//     domestic: 6
//   }
//   */

const countDriverRoutes = (drivers) => {
  const tripTypes = {
    international: 0,
    domestic: 0,
  };

  drivers.map((driver) => {
    if (driver.isInternation) {
      tripTypes.international++;
    } else {
      tripTypes.domestic++;
    }
  });
  return tripTypes;
};

console.log(countDriverRoutes(listOfDrivers));
