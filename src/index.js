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
import {BookingRepo} from './BookingRepo';

const customerGreeting = document.querySelector('#customerGreeting');
const customerBookings = document.querySelector('#customerBookings');
const totalSpent = document.querySelector('#totalSpent');
const calendarStart = document.querySelector('#start');
const todaysAvailableRooms = document.querySelector('#todaysAvailableRooms');
const selectRoomStyle = document.querySelector('#selectRoomStyle');
const bookItButton = document.querySelector('#submitForm');


const randomUser= (array) => Math.floor(Math.random() * array.length)
const addGreeting = (user) => customerGreeting.innerText = `Come Hither, ${user.name}!`
let customerRepo, bookingRepo

Promise.all([allCustomers, allRooms, allBookings])
  .then((values) => {
    showMe(values[0].customers, values[1].rooms, values[2].bookings)
  })

  const showMe = (customers, rooms, bookings) => {
    customerRepo = new CustomerRepo(customers);
    bookingRepo = new BookingRepo(bookings);
    const currentUser = customerRepo.customers[randomUser(customerRepo.customers)];
    addGreeting(currentUser);
    displayBookings(currentUser, bookings);
    allTimeCost(currentUser, rooms);
    setTodaysDate();
    calendarStart.addEventListener('change', function() {
      showAvailableRooms(bookingRepo, rooms)
    })
    selectRoomStyle.addEventListener('change', function() {
      findRoomsOfType(selectRoomStyle.value, rooms, bookingRepo);
    })
    bookItButton.addEventListener('click', function() {
      bookRoom(currentUser.id)
    })
  }

  const findRoomsOfType = (roomType, rooms, bookings) => {
    const date = calendarStart.value.replace(/-/g, '/')
    const availableRooms = bookings.findAvailableRooms(date, rooms)
    const roomsOfType = bookings.findByType(roomType, availableRooms)
    displayRooms(roomsOfType);
  }


  const showAvailableRooms = (bookings, rooms) => {
    const date = calendarStart.value.replace(/-/g, '/')
    const availableRooms = bookings.findAvailableRooms(date, rooms)
    displayRooms(availableRooms);
  }

const displayRooms = (rooms) => {
  todaysAvailableRooms.innerHTML = ''
  console.log('meaow', rooms)
  rooms.forEach(room => {
    todaysAvailableRooms.innerHTML += `
    <label><input type="radio" id=${room.number} name="roomType" class="room-type" value="${room.number}">Room Type: ${room.roomType}, Number of Beds: ${room.numBeds},
    Bed Size:${room.bedSize}, Bidet: ${room.bidet}, Room Number: ${room.number}, Cost: ${room.costPerNight}></label>
    `
  })
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
  calendarStart.setAttribute('value', date);
}

const bookRoom = (userID) => {
  const date = calendarStart.value.replace(/-/g, '/')
  const radioButtons = document.getElementsByName('roomType');
  let roomValue = 0
  radioButtons.forEach(button => {
    if (button.checked) {
      roomValue = button.value
    }
  })
  const bookingInformation = `{'userID': ${userID}, 'date': ${date}, 'roomNumber': ${roomValue}}`
  console.log('booking', bookingInformation)
}

// addNewBooking({ "userID": 48, "date": "2021/09/23", "roomNumber": 4 })
