document.addEventListener("DOMContentLoaded", function() {
  var day = new Date().getDate();
  var time = new Date().getTime();
  var second = new Date().getSeconds();
  var minute = new Date().getMinutes();
  var hour = new Date().getHours();
  
  document.getElementById('day-mark').innerHTML = "Current Day: " + day;
  document.getElementById('unix-mark').innerHTML = "Current unix-time: " + time;
  document.getElementById('second-mark').innerHTML = "Current Second: " + second;
  document.getElementById('minute-mark').innerHTML = "Current Minute: " + minute;
  document.getElementById('hour-mark').innerHTML = "Current Hour: " + hour;
)}
