export class Customer {
  constructor(customer) {
    this.id = customer.id
    this.name = customer.name
    this.bookings = []
  }

  findCustomerBookings() {
    this.bookings = bookings.filter(room => room.userID === currentUser.id)
  }


}
