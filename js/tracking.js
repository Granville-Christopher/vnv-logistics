// tracking.js
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get('id');
    // alert(trackingNumber);
    if (trackingNumber) {
        fetchAndDisplayTrackingDetails(trackingNumber);
        return false;
    } else {
        alert('Tracking number not provided.');
    }
});

async function fetchAndDisplayTrackingDetails(trackingNumber) {


    // Example using the Fetch API:
    const apiEndpoint = `http://localhost:3000/tracking/${trackingNumber}`;

    // Fetch tracking details directly from the server
    const response = await fetch(apiEndpoint)
    if (response.ok) {
        const json = await response.json();
        console.log(json);
        displayTrackingDetails(json)
    } else {
        throw new Error('Network response was not ok');
    }
    
}

function displayTrackingDetails(details) {
    const trackingDetailsBody = document.getElementById('trackingDetailsBody');

    // Clear existing content
    trackingDetailsBody.innerHTML = '';

    // Check if details are available
    if (details) {
        const row = trackingDetailsBody.insertRow();
        const trackingNumberCell = row.insertCell(0);
        const senderCell = row.insertCell(1);
        const receiverCell = row.insertCell(2);
        const statusCell = row.insertCell(3);
        const progressCell = row.insertCell(4);
        const deliveryAddressCell = row.insertCell(5);
        const departureDateCell = row.insertCell(6);
        const deliveryDateCell = row.insertCell(7);
        const currentLocationCell = row.insertCell(8);

        // Populate cell content with tracking details
        trackingNumberCell.textContent = details.trackingNumber;
        senderCell.textContent = details.senderName;
        receiverCell.textContent = details.receiverName;
        statusCell.textContent = details.Status;
        progressCell.textContent = details.Progress;
        deliveryAddressCell.textContent = details.receiverLocation;
        departureDateCell.textContent = details.Departure;
        deliveryDateCell.textContent = details.Delivery;
        currentLocationCell.textContent = details.currentCountry;
        // Add more cells and details as needed
    } else {
        alert('Tracking details not found. Please check the tracking number.');
    }
}


