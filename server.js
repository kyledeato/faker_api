
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
// we can create a function to return a random / fake "Product"
const User = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
        _id: faker.random.numeric(5) 
    };
    return newFake;
};

const Company = () => {
    const newFake = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
        _id: faker.random.numeric(5) 
    };
    return newFake;
};
    

app.get("/api/users/new", (req, res) => {
    const user = User();
    console.log(user);
    res.json( user );
});
app.get("/api/companies/new", (req, res) => {
    const company = Company();
    console.log(company);
    res.json( company );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
