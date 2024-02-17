function addAppointment() {
    var daySelect = document.getElementById("day-select");
    var selectedDay = daySelect.value;
    var timeInput = document.getElementById("appointment-time");
    var textInput = document.getElementById("appointment-text");
    var time = timeInput.value;
    var text = textInput.value;

    if (time && text) {
        var hour = time.split(":")[0];
        var minute = time.split(":")[1];
        
        // Checking if the time is valid
        if (isValidTime(hour, minute) && selectedDay !== "") {
            var row = document.getElementById("row-" + hour + "-" + selectedDay);
            if (row) {
                var appointment = document.createElement("div");
                appointment.className = "appointment";
                appointment.textContent = text;
                row.appendChild(appointment);
            }
        }
    }

    timeInput.value = "";
    textInput.value = "";
}

function isValidTime(hour, minute) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    return !isNaN(hour) && !isNaN(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
}
