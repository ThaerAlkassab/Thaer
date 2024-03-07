// Event display element
var eventDisplay = document.getElementById('eventDisplay');

// Function to update event display
function updateEventDisplay(eventType) {
    eventDisplay.textContent = `Event Type: ${eventType}`;
}

// Click event
document.getElementById('clickBtn').addEventListener('click', function() {
    updateEventDisplay('click');
});

// Keydown event
document.getElementById('textInput').addEventListener('keydown', function() {
    updateEventDisplay('keydown');
});

// Keyup event
document.getElementById('textInput').addEventListener('keyup', function() {
    updateEventDisplay('keyup');
});

// Mouseover event
document.getElementById('mouseOverDiv').addEventListener('mouseover', function() {
    updateEventDisplay('mouseover');
});

// Mouseout event
document.getElementById('mouseOverDiv').addEventListener('mouseout', function() {
    updateEventDisplay('mouseout');
});

// Change event
document.getElementById('textInput').addEventListener('change', function() {
    updateEventDisplay('change');
});
