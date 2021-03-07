import './css/base.scss';
import './images/noun_room_2072713.svg'
import {
  allCustomers,
  singleCustomer,
  allRooms,
  allBookings,
  addNewBooking
} from './api'
import {Customer} from './Customer';
import {CustomerRepo} from './CustomerRepo';
console.log('allCustomers', allCustomers)

const customerGreeting = document.querySelector('.customer-greeting');

const randomUser= (array) => Math.floor(Math.random() * array.length)
const addGreeting = (user) => customerGreeting.innerText = `Welcome Back ${user.name}!`

Promise.all([allCustomers, allRooms, allBookings])
  .then((values) => {
    showMe(values[0].customers, values[1].rooms, values[2].bookings)
  })

  const showMe = (customers, rooms, bookings) => {
    console.log('allBookings', bookings);
  const currentUser = customers[randomUser(customers)];
  addGreeting(currentUser);
  console.log('currentUser', currentUser)
  const userBookings = bookings.filter(room => room.userID === currentUser.id)
  console.log('bookings', userBookings);
  //search through rooms to find total price probably with reduce
  }
