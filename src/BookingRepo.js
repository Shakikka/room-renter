export class BookingRepo {
  constructor(bookingInfo) {
    this.bookingInfo = bookingInfo
  }

  findAvailableRooms(date, rooms) {
    const alreadyBooked = this.bookingInfo.filter(booking => booking.date === date)
    const availableRooms = rooms.filter(room => {
      return !alreadyBooked.find(booking => booking.roomNumber === room.number)
    })
    return availableRooms
  }

  findByType(roomType, availableRooms) {
    return availableRooms.filter(room => room.roomType === roomType)
  }


}
