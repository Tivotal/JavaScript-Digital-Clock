/* Created by Tivotal */

let dayTxt = document.querySelector(".day");
let monthTxt = document.querySelector(".month");
let dateTxt = document.querySelector(".date");
let yearTxt = document.querySelector(".year");

let timeTxt = document.querySelector(".time-display");
let ampmTxt = document.querySelector(".ampm");

function updateTime() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let ampm = "AM";

  let day = date.getDay();
  let month = date.getMonth();
  let dayDate = date.getDate();
  let year = date.getFullYear();

  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dayTxt.textContent = dayArray[day];
  monthTxt.textContent = monthArray[month];
  dateTxt.textContent = dayDate;
  yearTxt.textContent = year;

  if (hrs > 12) {
    hrs = hrs - 12;
    ampm = "PM";
  }

  if (hrs == 0) {
    hrs = 12;
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  timeTxt.textContent = hrs + ":" + mins + ":" + secs;
  ampmTxt.textContent = ampm;
}

setInterval(updateTime, 1000);
