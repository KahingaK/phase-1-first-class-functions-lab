// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  const firstTwo = drivers.slice(0, 2);
  return firstTwo;
};
const returnLastTwoDrivers = function (drivers) {
  const lastTwo = drivers.slice(2, 4);
  return lastTwo;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (fare) {
    return num * fare;
  };
}
function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function selectDifferentDrivers(drivers, selectFun) {
  switch (selectFun) {
    case returnFirstTwoDrivers:
      return returnFirstTwoDrivers(drivers);

      break;

    case returnLastTwoDrivers:
      return returnLastTwoDrivers(drivers);
      break;
  }
}
