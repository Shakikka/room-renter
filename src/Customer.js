export class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.rooms = [];
    this.totalSpent = 0;
  }

  findCustomerBookings(bookings) {
    return this.bookings = bookings.filter(room => room.userID === this.id)
  }

  getRoomInfo(rooms) {
    return this.rooms = this.bookings.map(booking => {
      return rooms.find(room => room.number === booking.roomNumber)
    })
  }

  findTotalSpent() {
    return this.totalSpent = this.rooms.reduce((totalCost, room) => {
      totalCost += room.costPerNight
      return totalCost
    }, 0)
  }
}
