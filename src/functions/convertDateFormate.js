// import Hijri from "hijri";
const { convert } = require("hijri");
const convertDateInto_YYYY_MM_DD = (date) => {
  let time = new Date(date);
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDay();
  return year + "/" + month + "/" + day;
};
const getDayOfMonth = (date) => {
  let value = convert(new Date(date));

  return value.dayOfMonth + "  " + value.monthText;
};

const getRangeDate = (start, end) => {
  console.log("wow");
  console.log(start);
  console.log(end);
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

// const getRangeDate = (start, end) => {
//   console.log("wow");
//   console.log(start);
//   console.log(end);
//   for (
//     var arr = [], dt = new Date(start);
//     dt <= new Date(end);
//     dt.setDate(dt.getDate() + 1)
//   ) {
//     arr.push(new Date(dt));
//   }
//   return arr;
// };
const getTimeBetweenTwoDate = (dateStart, dateEnd) => {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  
  const seconde = Math.floor((end.getTime() - start.getTime()) / 1000);
  if(seconde>60)
  return Math.floor(seconde/60)+" د "
  return seconde +" ث ";
};
const convertDateInto_time_HH_MM = (date) => {
  let time = new Date(date);
  let hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
  let minutes =
    time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
  return hours + ":" + minutes;
};

const convertDateInto_time_HH_MM_PM_AM = (date) => {
  let time = new Date(date);
  let PMorAM = time.getHours >= 12 ? " PM" : " AM";
  let hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
  let minutes =
    time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
  return hours + ":" + minutes + PMorAM;
};
const convertDateIntoRelativeTime = (value, title) => {
  let timeStamp = new Date(value);

  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;

  if (secondsPast < 60) {
    return "ث " + parseInt(secondsPast);
  }
  if (secondsPast < 3600) {
    return "د " + parseInt(secondsPast / 60);
  }
  if (secondsPast <= 86400) {
    return "س " + parseInt(secondsPast / 3600);
  }
  if (secondsPast > 86400) {
    var day = timeStamp.getDate();
    var month = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "");
    var year =
      timeStamp.getFullYear() === now.getFullYear()
        ? ""
        : " " + timeStamp.getFullYear();
    return day + " " + month + year;
  }
};
module.exports = { convertDateIntoRelativeTime
,convertDateInto_YYYY_MM_DD
,convertDateInto_time_HH_MM_PM_AM,getRangeDate,
getTimeBetweenTwoDate,
convertDateInto_time_HH_MM,
getDayOfMonth};
