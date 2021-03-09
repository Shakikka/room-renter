import {expect} from 'chai';
import {Customer} from '../src/Customer';
import {CustomerRepo} from '../src/CustomerRepo';
import {
  fakeUsers,
fakeBookings,
fakeRooms
} from '../data/fakeData'

describe('Customer', function() {
  let customerRepo, customer1, customer2

  beforeEach(function() {
    customerRepo = new CustomerRepo(fakeUsers)
    customer1 = customerRepo.customers[0];
    customer2 = customerRepo.customers[1];
  });

  it('should have a name', function() {
    expect(customerRepo.customers[1].name).to.equal('El Sol')
  });

  it('should have an id', function() {
    expect(customerRepo.customers[0].id).to.equal(17)
  });

  it('should be able to find associated bookings', function() {
    const a = [fakeBookings[1], fakeBookings[4], fakeBookings[7]]
    expect(customer2.findCustomerBookings(fakeBookings)).to.deep.equal(a)
  });

  it('should be able to find room information for bookings', function() {
    const b = [fakeRooms[0], fakeRooms[3], fakeRooms[0]]
    customer1.findCustomerBookings(fakeBookings);
    expect(customer1.getRoomInfo(fakeRooms)).to.deep.equal(b)
  });

  it('should be able to find total amount spent', function() {
    customer1.findCustomerBookings(fakeBookings);
    customer1.getRoomInfo(fakeRooms);
    expect(customer1.findTotalSpent().toFixed(2)).to.equal('1185.88')
  });

});
