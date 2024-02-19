// frontend.js



function displayPackages(packages) {
    const packageTableBody = document.getElementById('packageList');
    if (packageTableBody) {
        packageTableBody.innerHTML = '';
        packages.forEach(package => {
            const row = packageTableBody.insertRow();
            const [trackingNumberCell, senderCell, receiverCell, deliveryAddressCell, statusCell, ProgressCell, departureDateCell, deliveryDateCell, actionsCell] =
                Array.from({ length: 9 }, () => row.insertCell());

            trackingNumberCell.textContent = package.trackingNumber;
            senderCell.textContent = package.senderName;
            receiverCell.textContent = package.receiverName;
            deliveryAddressCell.textContent = package.receiverLocation;
            statusCell.textContent = package.Status;
            ProgressCell.textContent = package.Progress;
            departureDateCell.textContent = package.Departure;
            deliveryDateCell.textContent = package.Delivery;
            

            let packages = {
                'id': package._id,
                'senderName': package.senderName,
                'senderEmail': package.senderEmail,
                'senderLocation': package.senderLocation,
                'receiverName': package.receiverName,
                'receiverEmail': package.receiverEmail,
                'receiverLocation': package.receiverLocation,
                'Status': package.Status,
                'Progress': package.Progress,
                'Departure': package.Departure,
                'Delivery': package.Delivery,
                'parcelDetails': package.parcelDetails,
                'takeOffCountry': package.takeOffCountry,
                'currentCountry': package.currentCountry,
            }

            contents = JSON.stringify(packages)
            sessionStorage.setItem('ship', contents)

            const editButton = createButton('Edit', () => handleEditPackage(package._id));
            editButton.classList.add('edit_button');
            
            const deleteButton = createButton('Delete', () => handleDeletePackage(package._id));
            deleteButton.classList.add('delete_button');


            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    } else {
        console.error('Element with ID "packageList" not found.');
    }
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    // button.setAttribute('class', text)
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

async function handleDeletePackage(packageId) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/admin/packages/${packageId}`, {
            method: 'POST',
        });

        if (response.ok) {
            alert('Package deleted successfully');
            fetchPackages(); // Fetch and display updated package list after deletion
        } else {
            console.error('Failed to delete package:', response.statusText);
        }
    } catch (error) {
        console.error('Error during delete:', error);
    }
}

function handleEditPackage(packageId) {
    // Redirect to the edit page with the package ID in the URL
    window.location.href = `http://127.0.0.1:5500/edit.html?id=${packageId}`;
}



document.addEventListener('DOMContentLoaded', () => {
    // Call fetchPackages when the DOM is fully loaded
    const fetchPackages = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/admin/packages');
            if (response.ok) {
                const data = await response.json();
                displayPackages(data.packages);
            } else {
                console.error('Failed to fetch packages:', response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };
    fetchPackages()
});