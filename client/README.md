# Order Management System CLIENT

Key features:

- List of all orders.
- Click one order to see the specific JSON raw object.
- Create a new order: if you select state "IN_PROGRESS" and you do not select an employee, one will be asigned automatically to the order.
- Edit the orders state: only possible to send the edit if the selected state is different than the one already included in the order.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

Create .env file with database variables in the root of the project:

`REACT_APP_APOLLO_CLIENT_URI=urlToYourAPI`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`
