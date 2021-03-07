import {expect} from 'chai';
import {Customer} from '../src/Customer';
import {CustomerRepo} from '../src/CustomerRepo';
import {users} from '../data/fakeData'

describe('Customer', function() {
  let customerRepo

  beforeEach(function() {
    // users = [{id: 17, name: 'La Luna'}, {id: 43, name: 'El Sol'}];
    customerRepo = new CustomerRepo(users)
  });

  it('should accept an array of customer data and create customer classes', function() {
    expect(customerRepo.customers[1]).to.be.instanceOf(Customer)
  });

});
