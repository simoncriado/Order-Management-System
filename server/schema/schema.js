const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// Importing hardcoded data
const { orders, employees } = require("../data/data");

// Hardcoded order´s data
// const orders = [
//   { id: "1", state: "OPEN", customer: "customer1", employeeId: "1" },
//   {
//     id: "2",
//     state: "IN_PROGRESS",
//     customer: "customer2",
//     employeeId: "",
//   },
//   { id: "3", state: "COMPLETE", customer: "customer3", employeeId: "3" },
// ];
// const employees = [
//   { id: "1", name: "employee1" },
//   { id: "2", name: "employee2" },
//   { id: "3", name: "employee3" },
// ];

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLID },
    state: { type: GraphQLString },
    customer: { type: GraphQLString },
    employee: {
      type: EmployeeType,
      resolve(parent, args) {
        return employees.find((employee) => employee.id === parent.employeeId);
      },
    },
  }),
});

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
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

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addOrder: {
//       type: OrderType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         state: { type: new GraphQLNonNull(GraphQLString) },
//         customer: { type: GraphQLString },
//         employeeId: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         let order = new Order({
//           id: args.id,
//           state: args.state,
//           customer: args.customer,
//           employeeId: args.employeeId,
//         });
//         // Here I would add the new order to the DB
//         return orders.push(order);
//       },
//     },
//   },
// });

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
});
