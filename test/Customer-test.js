import {expect} from 'chai';
import {Customer} from '../src/Customer';
import {CustomerRepo} from '../src/customerRepo';

describe('Customer', function() {
  let users, customerRepo

  beforeEach(function() {
    users = [{id: 17, name: 'La Luna'}, {id: 43, name: 'El Sol'}];
    customerRepo = new CustomerRepo(users)
  });

  it('should accept an array of customer data and create customer classes', function() {
    expect(customerRepo.customers).to.deep.equal(users)
  });

});
