// Replace 'town' and 'village' with your actual data
const residentOptions = ['Town', 'Village'];
const complaintOptions = ['Type1', 'Type2', 'Type3']; // Replace with your complaint types

// Populate resident type dropdown
const residentDropdown = document.getElementById('residentType');
residentOptions.forEach(option => {
    const newOption = document.createElement('option');
    newOption.value = option;
    newOption.text = option;
    residentDropdown.add(newOption);
});

// Populate complaint type dropdown
const complaintDropdown = document.getElementById('complaintType');
complaintOptions.forEach(option => {
    const newOption = document.createElement('option');
    newOption.value = option;
    newOption.text = option;
    complaintDropdown.add(newOption);
});

function submitForm() {
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const residentType = residentDropdown.value;
    const complaintType = complaintDropdown.value;

    // Generate application number in the format yyyy/mm/dd/sequence
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, '/');
    const sequenceNumber = Math.floor(Math.random() * 1000); // Replace with your actual sequence generation logic
    const applicationNumber = `${formattedDate}/${sequenceNumber}`;

    // Send application number to the user's phone number (you'll need a backend for this)
    // Example: You can use Twilio, Nexmo, or other SMS gateways for sending SMS

    // Store data in Google Sheets using Google Apps Script (needs to be deployed as a web app)
    google.script.run.submitComplaint(name, phoneNumber, residentType, complaintType, applicationNumber);
}
