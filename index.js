const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// const returnFirstTwoDrivers = (driversArray) => {return driversArray.slice(0, 2)}
const returnFirstTwoDrivers = drivers => drivers.slice(0,2)
// const returnLastTwoDrivers = (driversArray) => {return driversArray.slice(2, 4)}
const returnLastTwoDrivers = drivers => drivers.slice(2,4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = multiplier => function(fare) { return fare * multiplier }

// const createFareMultiplier = num => function(fare){
//     return fare * num 
// }

const createFareMultiplier = num => (fare => fare * num)

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = (driversArray, whatevFunction) => {return whatevFunction(driversArray) }
const selectDifferentDrivers = (drivers, someFunc) => someFunc(drivers); 