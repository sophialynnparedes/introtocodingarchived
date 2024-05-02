export function getDate() {
  var presentDate = new Date();
  var day = presentDate.getDate();
  var weekdayNum = presentDate.getDay();
  var monthNum = presentDate.getMonth();
  var weekdayStr;
  var monthStr;
  if (weekdayNum == 0) {
    weekdayStr = "Sunday";
  } else if (weekdayNum == 1) {
    weekdayStr = "Monday";
  } else if (weekdayNum == 2) {
    weekdayStr = "Tuesday";
  } else if (weekdayNum == 3) {
    weekdayStr = "Wednesday";
  } else if (weekdayNum == 4) {
    weekdayStr = "Thursday";
  } else if (weekdayNum == 5) {
    weekdayStr = "Friday";
  } else if (weekdayNum == 6) {
    weekdayStr = "Saturday";
  }

  if (monthNum == 0) {
    monthStr = "January";
  } else if (monthNum == 1) {
    monthStr = "February";
  } else if (monthNum == 2) {
    monthStr = "March";
  } else if (monthNum == 3) {
    monthStr = "April";
  } else if (monthNum == 4) {
    monthStr = "May";
  } else if (monthNum == 5) {
    monthStr = "June";
  } else if (monthNum == 6) {
    monthStr = "July";
  } else if (monthNum == 7) {
    monthStr = "August";
  } else if (monthNum == 8) {
    monthStr = "September";
  } else if (monthNum == 9) {
    monthStr = "October";
  } else if (monthNum == 10) {
    monthStr = "November";
  } else if (monthNum == 11) {
    monthStr = "December";
  }
  return weekdayStr + ", " + monthStr + " " + day;
}
