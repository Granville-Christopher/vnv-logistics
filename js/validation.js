document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.ship');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      // Validate form inputs
      if (validateForm()) {
        // If validation passes, collect form data manually
        const formData = {
          senderName: document.getElementById('SF-name').value,
          senderEmail: document.getElementById('Semail').value,
          senderLocation: document.getElementById('Slocation').value,
          receiverName: document.getElementById('RF-name').value,
          receiverEmail: document.getElementById('Remail').value,
          receiverLocation: document.getElementById('Rlocation').value,
          parcelDetails: document.getElementById('details').value,
          Departure: document.getElementById('Departure').value,
          Delivery: document.getElementById('Delivery').value,
          Status: document.getElementById('Status').value,
          Progress: document.getElementById('Progress').value,
          takeOffCountry: document.getElementById('countries').value,
          currentCountry: document.getElementById('Ccountry').value,
        };

        // Send the form data to the server using fetch
        
        // Send the form data to the server using fetch
        const response = await fetch('http://127.0.0.1:3000/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Optionally, redirect or show a success message
          alert('package uploaded successfully!');
          window.location.href = 'dashboard.html'
        } else {
          // Handle server-side validation errors or other issues
          if (response.status === 400) {
            // Server returned a 400 Bad Request status
            const responseData = await response.json();
            alert(`Failed to upload package: ${JSON.stringify(responseData.errors)}`);
          } else {
            // Handle other server errors (e.g., 500 Internal Server Error)
            alert(`Form submission failed with status: ${response.status}`);
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle client-side error (e.g., show an error message to the user)
    }
  });
});

function validateForm() {
  // Reset previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((msg) => msg.remove());

  let isValid = true;

  // Validate sender name
  isValid = validateField('SF-name', 'Sender name is required') && isValid;

  // Validate sender email
  isValid = validateEmail('Semail', 'Invalid sender email format') && isValid;

  // Validate sender location
  isValid = validateField('Slocation', 'Sender location is required') && isValid;

  // Validate receiver name
  isValid = validateField('RF-name', 'Receiver name is required') && isValid;

  // Validate receiver email
  isValid = validateEmail('Remail', 'Invalid receiver email format') && isValid;

  // Validate receiver location
  isValid = validateField('Rlocation', 'Receiver location is required') && isValid;

  // Departure date
  isValid = validateField('Departure', 'Estimated Departure Date is Required') && isValid;

  // Delivery date
  isValid = validateField('Delivery', 'Estimated Delivery Date is Required') && isValid;

  // status
  isValid = validateField('Status', 'Package status is Required') && isValid;

  // progress
  isValid = validateField('Progress', 'Package Progress is Required') && isValid;

  // Validate parcel details
  isValid = validateField('details', 'Parcel details are required') && isValid;

  // Validate take-off country
  isValid = validateField('countries', 'Select take-off country') && isValid;

  // Validate current country
  isValid = validateField('Ccountry', 'Select current country') && isValid;

  return isValid;
}

function validateField(fieldId, errorMessage) {
  const inputElement = document.getElementById(fieldId);
  if (!inputElement.value.trim()) {
    displayErrorMessage(inputElement, errorMessage);
    return false;
  }
  return true;
}

function validateEmail(fieldId, errorMessage) {
  const inputElement = document.getElementById(fieldId);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputElement.value.trim())) {
    displayErrorMessage(inputElement, errorMessage);
    return false;
  }
  return true;
}

function displayErrorMessage(inputElement, message) {
  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  inputElement.parentNode.appendChild(errorMessage);
}







// 