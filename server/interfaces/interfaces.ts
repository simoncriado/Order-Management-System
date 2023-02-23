export interface IItem {
  id: string | number;
  name: string;
  price: number;
}

export interface IEmployee {
  id: string | number;
  name: string;
}

export interface ICustomer {
  id: string | number;
  name: string;
}

export interface IOrder {
  id: string | number;
  state: string;
  customerId: string | number;
  employeeId: string | number;
  items: IItem[];
  creation: string;
  lastUpdate: string;
}
