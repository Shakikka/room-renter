import {expect} from 'chai';
import {Customer} from '../src/Customer';

describe('Customer', function() {
  let users, user1, user2
  beforeEach(function() {
    users = [{id: 17, name: 'La Luna'}, {id: 43, name: 'El Sol'}];
    user1 = new Customer(users[0]);
    user2 = new Customer(users[1]);
  });

  it('should have an id', function() {
    expect(user2.id).to.equal(43)
  });

  it('should have a name', function() {
    expect(user1).to.deep.equal(users[0])
  });
});
