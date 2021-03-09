import {expect} from 'chai';
import {Customer} from '../src/Customer';
import {CustomerRepo} from '../src/CustomerRepo';
import {fakeUsers} from '../data/fakeData'

describe('Customer', function() {
  let customerRepo

  beforeEach(function() {
    customerRepo = new CustomerRepo(fakeUsers)
  });

  it('should accept an array of customer data and create customer classes', function() {
    expect(customerRepo.customers[1]).to.be.instanceOf(Customer)
  });

});
