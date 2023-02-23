const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

import { IOrder, ICustomer, IEmployee, IItem } from "../interfaces/interfaces";

// Importing hardcoded data
const { orders, employees, customers } = require("../data/data");

const OrderType: IOrder = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLID },
    state: { type: GraphQLString },
    customer: {
      type: CustomerType,
      resolve(parent, args): ICustomer {
        return customers.find((customer) => customer.id === parent.customerId);
      },
    },
    employee: {
      type: EmployeeType,
      resolve(parent, args): IEmployee {
        return employees.find((employee) => employee.id === parent.employeeId);
      },
    },
    items: {
      type: new GraphQLList(ItemType),
    },
    creation: { type: GraphQLString },
    lastUpdate: { type: GraphQLString },
  }),
});

const EmployeeType: IEmployee = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const CustomerType: ICustomer = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const ItemType: IItem = new GraphQLObjectType({
  name: "Item",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: graphql.GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    order: {
      type: OrderType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code to get data from db
        return orders.find((order) => order.id === args.id);
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent, args) {
        return orders;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateOrderState: {
      type: OrderType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        state: { type: new GraphQLNonNull(GraphQLString) },
        employeeId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let orderToUpdate = orders.find((order) => order.id === args.id);
        if (orderToUpdate) {
          return (
            (orderToUpdate.state = args.state),
            (orderToUpdate.employeeId = args.employeeId),
            (orderToUpdate.lastUpdate = `${new Date()}`),
            orderToUpdate
          );
        }
        // orders.map((order) => {
        //   if (order.id === args.id) {
        //     order.state = args.state;
        //     order.employeeId = args.employeeId;
        //     order.lastUpdate = `${new Date()}`;
        //     return order;
        //   }
        // });
        // return orders.filter((order) => order.id === args.id)[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
