// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

import './index.js'
import {
  allCustomers,
  singleCustomer,
  allRooms,
  allBookings,
  addNewBooking
} from './api'

console.log('allCustomers', allCustomers)
const randomUser= (array) => Math.floor(Math.random() * array.length)

allCustomers
.then(customer => {
  console.log(customer)
  console.log(customer.customers[randomUser(customer.customers)])
})

Promise.all([allCustomers, allRooms, allBookings])
  .then((values) => {
    showMe(values[0].customers, values[1].rooms, values[2].bookings)
  })

  const showMe = (customers, rooms, bookings) => {
    console.log('customers', customers)
    console.log('rooms', rooms)
    console.log('bookings', bookings)
  }
