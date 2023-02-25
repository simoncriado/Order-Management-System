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
  customer: ICustomer;
  employee: IEmployee;
  items: IItem | IItem[];
  creation: string | Date;
  lastUpdate: string | Date;
}
