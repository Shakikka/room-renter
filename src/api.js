export const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Run for your life!');
  } else {
    return response.json();
  }
}

export const allCustomers = fetch('http://localhost:3001/api/v1/customers')
  .then(checkForError)
  .catch(err => alert(err))

export const singleCustomer = (customerID) => {
  fetch(`http://localhost:3001/api/v1/customers/${customerID}`)
  .then(checkForError)
  .catch(err => alert(err))
}

export const allRooms = fetch('http://localhost:3001/api/v1/rooms')
  .then(checkForError)
  .catch(err => alert(err))

export const allBookings = fetch('http://localhost:3001/api/v1/bookings')
  .then(checkForError)
  .catch(err => alert(err))

  export const addNewBooking = (bookingInfo) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {
      	'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    })
      // .then(checkForError)
      // .catch(err => alert(err))
  }
