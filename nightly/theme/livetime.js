document.addEventListener("DOMContentLoaded", function() {
    var day = new Date().getDate();
    var time = new Date().getTime();
    var second = new Date().getSeconds();
    var minute = new Date().getMinutes();
    var hour = new Date().getHours();
    var year = new Date().getFullYear();
    var month = new Date().toLocaleString('en', { month: 'long' });
    var formattedDate = new Date().toISOString().slice(0, 10);

    var dayElement = document.getElementById('day-mark');
    if (dayElement) {
        dayElement.innerHTML = "Current Day: " + day;
    }

    var unixElement = document.getElementById('unix-mark');
    if (unixElement) {
        unixElement.innerHTML = "Current Unix-time: " + time;
    }

    var secondElement = document.getElementById('second-mark');
    if (secondElement) {
        secondElement.innerHTML = "Current Second: " + second;
    }

    var minuteElement = document.getElementById('minute-mark');
    if (minuteElement) {
        minuteElement.innerHTML = "Current Minute: " + minute;
    }

    var hourElement = document.getElementById('hour-mark');
    if (hourElement) {
        hourElement.innerHTML = "Current Hour: " + hour;
    }

    var yearElement = document.getElementById('year-mark');
    if (yearElement) {
        yearElement.innerHTML = "Current Year: " + year;
    }
    
    var monthElement = document.getElementById('month-mark');
    if (monthElement) {
        monthElement.innerHTML = "Current Month: " + month;
    }

    var dateElement = document.getElementById('date-mark');
    if (dateElement) {
        dateElement.innerHTML = "Current Date: " + formattedDate;
    }
});
