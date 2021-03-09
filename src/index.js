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

const customerGreeting = document.querySelector('#customerGreeting');
const customerBookings = document.querySelector('#customerBookings');
const totalSpent = document.querySelector('#totalSpent');
const calendarStart = document.querySelector('#start');

const randomUser= (array) => Math.floor(Math.random() * array.length)
const addGreeting = (user) => customerGreeting.innerText = `Come Hither, ${user.name}!`


Promise.all([allCustomers, allRooms, allBookings])
  .then((values) => {
    showMe(values[0].customers, values[1].rooms, values[2].bookings)
  })

  const showMe = (customers, rooms, bookings) => {
    const customerRepo = new CustomerRepo(customers);
    const currentUser = customerRepo.customers[randomUser(customerRepo.customers)];
    addGreeting(currentUser);
    displayBookings(currentUser, bookings);
    allTimeCost(currentUser, rooms);
    setTodaysDate();

  }

const displayBookings = (customer, bookings) => {
  customer.findCustomerBookings(bookings);
  console.log('bookings', customer.bookings);
  customerBookings.innerHTML = '';
  customer.bookings.forEach(booking => {
    customerBookings.innerHTML += `
      <li>Date: ${booking.date}, Room: ${booking.roomNumber}</li>
    `
  })
}

const allTimeCost = (customer, rooms) => {
  customer.getRoomInfo(rooms)
  customer.findTotalSpent()
  totalSpent.innerText = `Total Spent: $${customer.totalSpent.toFixed(2)}`
}

const setTodaysDate = () => {
  const date = new Date().toISOString().split("T")[0];
  calendarStart.setAttribute('min', date);
  calendarStart.value = date
  console.log(date)
}
