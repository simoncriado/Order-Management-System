export interface IItem {
  id: string;
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

export interface INewOrder {
  state: string;
  customerId: string;
  employeeId: string;
  itemsId: string[];
}

export interface IEditOrder {
  id: string;
  state: string;
}
