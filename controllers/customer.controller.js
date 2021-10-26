
const Customer = require('../models/customer.model.js');

//Create and Save a new Customer
exports.create = (req, res) =>{
    //Validate
    if (!req.body){
        res.status(400).send({
            message: 'Content can not be empty'
        });
    }

    //Create a Customer
    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    //Parâmetros (customer -> newCustumer na model )
    //Save Customer in the DataBase
    Customer.create(customer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Customer.' 
            });
        
        //Send data of customer for model    
        else res.send(data);
    });
};

//Retrieve all Customers from the database
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
    if (err)
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving customers.'
        });
    //Send data of customer for model 
    else res.send(data);    
    });
};


//Find a single Customer with a CustomerId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}.`
                });
            }else {
                res.status(500).send({
                    message: 'Error retrieving Customer with id ' + req.params.customerId
                });
            }
        }else res.send(data);
    });
};

//Update a Customer with the specified customerId in the request
exports.update = (req, res) => {
    //Validate
    if (!req.body){
        res.status(400).send({
            message: 'Content can not be empty'
        });
    }

    Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.customerId}.`
                    });
                }else {
                    res.status(500).send({
                        message: 'Error updating Customer with id ' + req.params.customerId
                    });
                }
            }else res.send(data);
        }
    );
};

//Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found'){
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}.`
                });
            }else{
                res.status(500).send({
                    message: 'Could not delete Customer with id ' + req.params.customerId
                });
            }
        }else res.send({message: `Customer was deleted Successfully!`});
    });
};

//Delete all Customers from the database
exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while removing all customers.'
            });
        else res.send({message: `All Customers were deleted successfully!`})
    });    
};

