import { IOrder, ICustomer, IEmployee, IItem } from "../interfaces/interfaces";

export const orders: IOrder[] = [
  {
    id: "1",
    state: "OPEN",
    customer: {
      id: "1",
      name: "customer1",
    },
    employee: {
      id: "",
      name: "",
    },
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
    customer: {
      id: "2",
      name: "customer2",
    },
    employee: {
      id: "2",
      name: "employee2",
    },
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
    customer: {
      id: "3",
      name: "customer3",
    },
    employee: {
      id: "",
      name: "",
    },
    items: [{ id: "3", name: "item3", price: 3 }],
    creation:
      "Thu Feb 10 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 14 2023 12:11:23 GMT+0100 (hora estándar de Europa central)",
  },
  {
    id: "4",
    state: "IN_PROGRESS",
    customer: {
      id: "4",
      name: "customer4",
    },
    employee: {
      id: "",
      name: "",
    },
    items: [{ id: "4", name: "item4", price: 4 }],
    creation:
      "Thu Feb 19 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 23 2023 09:11:23 GMT+0100 (hora estándar de Europa central)",
  },
  {
    id: "5",
    state: "IN_PROGRESS",
    customer: {
      id: "4",
      name: "customer4",
    },
    employee: {
      id: "",
      name: "",
    },
    items: [{ id: "4", name: "item4", price: 4 }],
    creation:
      "Thu Feb 19 2023 10:11:23 GMT+0100 (hora estándar de Europa central)",
    lastUpdate:
      "Thu Feb 23 2023 09:11:23 GMT+0100 (hora estándar de Europa central)",
  },
];

export const employees: IEmployee[] = [
  { id: "1", name: "employee1" },
  { id: "2", name: "employee2" },
  { id: "3", name: "employee3" },
];

export const customers: ICustomer[] = [
  { id: "1", name: "customer1" },
  { id: "2", name: "customer2" },
  { id: "3", name: "customer3" },
];

export const items: IItem[] = [
  { id: "1", name: "price1", price: 1 },
  { id: "2", name: "price2", price: 2 },
  { id: "3", name: "price3", price: 3 },
];
