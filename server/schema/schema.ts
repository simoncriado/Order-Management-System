const { buildSchema } = require("graphql");
import { IOrder, ICustomer, IEmployee, IItem } from "../interfaces/interfaces";
import { orders, employees, customers, items } from "../data/data";

// Describing the data types and mutations that the API will handle
export let schema = buildSchema(`
input OrderInput {
  state: String!
  customerId: String!
  employeeId: String!
  itemsId: [String]!
}

type Order {
  id: ID!
  state: String!
  customer: Customer!
  employee: Employee
  items: [Item]!
  creation: String!
  lastUpdate: String
}

type Employee {
  id: ID!
  name: String!
}

type Customer {
  id: ID!
  name: String!
}

type Item {
  id: ID!
  name: String!
  price: Int!
}

type Query {
  getOrder(id: ID!): Order
  getOrders: [Order]!
}

type Mutation {
  createOrder(input: OrderInput): Order
  updateOrderState(id: ID!, state: String!): Order
}
`);

// Describing how to resolve the queries and mutations that the API has
export let root = {
  getOrder: ({ id }) => {
    if (orders.find((order: IOrder) => order.id == id) === undefined) {
      throw new Error("No order exists with id " + id);
    }
    return orders.find((order) => order.id === id);
  },

  getOrders: () => {
    return orders;
  },

  createOrder: ({ input }) => {
    const id: string = String(Math.floor(Math.random() * 9999999));

    let chosenCustomer: ICustomer = customers.find(
      (customer) => customer.id === input.customerId
    );

    // If the state is in progress and no employee was give when creating the order, I just asign one employee to the order
    let chosenEmployee: IEmployee;
    if (input.state === "IN_PROGRESS" && input.employeeId === "") {
      chosenEmployee = employees[0];
    } else {
      chosenEmployee = employees.find(
        (employee) => employee.id === input.employeeId
      );
    }

    let chosenItems: IItem[] = [];
    items.map((item) => {
      if (input.itemsId.includes(item.id)) {
        chosenItems.push(item);
      }
    });

    const newOrder: IOrder = {
      id: id,
      state: input.state,
      customer: chosenCustomer,
      employee: chosenEmployee,
      items: chosenItems,
      creation: new Date().toString(),
      lastUpdate: new Date().toString(),
    };

    orders.push(newOrder);
    return newOrder;
  },

  updateOrderState: ({ id, state }) => {
    let orderToUpdate: IOrder = orders.find((order) => order.id === id);
    if (orderToUpdate) {
      return (
        (orderToUpdate.state = state),
        (orderToUpdate.employee = employees[1]),
        (orderToUpdate.lastUpdate = `${new Date()}`),
        orderToUpdate
      );
    }
  },
};
