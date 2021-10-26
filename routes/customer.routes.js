//Define Routes

module.exports = app => {
    const customers = require('../controllers/customer.controller.js');

    //For Create a new Customer
    app.post('/customers', customers.create);

    //For Retrieve all Customers
    app.get('/customers', customers.findAll);

    //For Retrieve a single Customer with customerId
    app.get('/customers/:customerId', customers.findOne);

    //For Update a Customer with customerId
    app.put('/customers/:customerId', customers.update);

    //For Delete a single Customer with customerId
    app.delete('/customers/:customerId', customers.delete);

    //For Delete all Customers
    app.delete('/customers', customers.deleteAll);

};