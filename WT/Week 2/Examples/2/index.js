function addAppointment() {
    var daySelect = document.getElementById("day-select");
    var selectedDay = daySelect.value;
    var hourSelect = document.getElementById("appointment-hour");
    var minuteSelect = document.getElementById("appointment-minute");
    var lengthInput = document.getElementById("appointment-length");
    var textInput = document.getElementById("appointment-text");
    var hour = hourSelect.value;
    var minute = minuteSelect.value;
    var length = parseInt(lengthInput.value);
    var text = textInput.value;

    if (hour && minute && !isNaN(length) && length > 0 && text && selectedDay !== "") {
        if (isValidTime(hour, minute)) {
            var row = document.getElementById("row-" + hour + "-" + selectedDay);
            if (row) {
                var endHour = parseInt(hour) + Math.floor((parseInt(minute) + length) / 60);
                var endMinute = (parseInt(minute) + length) % 60;

                var appointment = document.createElement("div");
                appointment.className = "appointment";
                appointment.textContent = text + " (" + formatTime(hour) + ":" + formatTime(minute) + " - " + formatTime(endHour) + ":" + formatTime(endMinute) + ")";
                row.appendChild(appointment);
            }
        }
    }

    hourSelect.value = "";
    minuteSelect.value = "";
    lengthInput.value = "";
    textInput.value = "";
}

function isValidTime(hour, minute) {
    return !isNaN(hour) && !isNaN(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
