import {expect} from 'chai';
import {Customer} from '../src/Customer';
import {CustomerRepo} from '../src/CustomerRepo';
import {users} from '../data/fakeData'

describe.only('Customer', function() {
  let customerRepo

  beforeEach(function() {
    // users = [{id: 17, name: 'La Luna'}, {id: 43, name: 'El Sol'}];
    customerRepo = new CustomerRepo(users)
  });

  it('should have a name', function() {
    expect(customerRepo.customers[1].name).to.equal('El Sol')
  });

  it('should have an id', function() {
    expect(customerRepo.customers[0].id).to.equal(17)
  })

});
