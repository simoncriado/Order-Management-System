import { ICustomer, IEmployee, IItem } from "../interfaces/interfaces";

// Hardcoded data for the moment. Another option would be to query the customers, employees and items to retrieve them from the DB
export const listOfCustomer: ICustomer[] = [
  { id: "1", name: "customer1" },
  { id: "2", name: "customer2" },
  { id: "3", name: "customer3" },
];
export const listOfEmployees: IEmployee[] = [
  { id: "1", name: "employee1" },
  { id: "2", name: "employee2" },
  { id: "3", name: "employee3" },
];
export const listOfItems: IItem[] = [
  { id: "1", name: "price1", price: 1 },
  { id: "2", name: "price2", price: 2 },
  { id: "3", name: "price3", price: 3 },
];
