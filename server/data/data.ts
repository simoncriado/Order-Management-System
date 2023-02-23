import { IOrder, ICustomer, IEmployee } from "../interfaces/interfaces";

const orders: IOrder[] = [
  {
    id: "1",
    state: "OPEN",
    customerId: "1",
    employeeId: "",
    items: [
      { id: "1", name: "item1", price: 1 },
      { id: "2", name: "item2", price: 2 },
    ],
    creation:
      "Thu Feb 23 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 23 2023 12:11:23 GMT+0100 (hora estándar de Europa central)",
  },
  {
    id: "2",
    state: "IN_PROGRESS",
    customerId: "2",
    employeeId: "2",
    items: [
      { id: "2", name: "item2", price: 2 },
      { id: "3", name: "item3", price: 3 },
    ],
    creation:
      "Thu Feb 21 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 21 2023 12:11:23 GMT+0100 (hora estándar de Europa central)",
  },
  {
    id: "3",
    state: "COMPLETE",
    customerId: "3",
    employeeId: "",
    items: [{ id: "3", name: "item3", price: 3 }],
    creation:
      "Thu Feb 10 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 14 2023 12:11:23 GMT+0100 (hora estándar de Europa central)",
  },
  {
    id: "4",
    state: "IN_PROGRESS",
    customerId: "3",
    employeeId: "3",
    items: [{ id: "4", name: "item4", price: 4 }],
    creation:
      "Thu Feb 19 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 23 2023 09:11:23 GMT+0100 (hora estándar de Europa central)",
  },
];

const employees: IEmployee[] = [
  { id: "1", name: "employee1" },
  { id: "2", name: "employee2" },
  { id: "3", name: "employee3" },
];

const customers: ICustomer[] = [
  { id: "1", name: "customer1" },
  { id: "2", name: "customer2" },
  { id: "3", name: "customer3" },
];

module.exports = { orders, employees, customers };
