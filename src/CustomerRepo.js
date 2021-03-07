import {Customer} from './Customer';
export class CustomerRepo {
  constructor(customersData) {
    this.customers = []
    this.createCustomers(customersData)

  }

  createCustomers(customersData) {
    this.customers = customersData.map(customer => new Customer(customer))
  }

  
}
