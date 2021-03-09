import {expect} from 'chai';
import {BookingRepo} from '../src/BookingRepo'
import {
  fakeBookings,
  fakeRooms
} from '../data/fakeData'

describe.only('BookingRepo', function() {
  let bookingRepo

  beforeEach(function() {
    bookingRepo = new BookingRepo(fakeBookings)
  });

  it('should be able to find rooms available on given date', function () {
    const result = [fakeRooms[0], fakeRooms[2], fakeRooms[3], fakeRooms[4], fakeRooms[5]]
    expect(bookingRepo.findAvailableRooms('2020/01/24', fakeRooms)).to.deep.equal(result);
  });




});
