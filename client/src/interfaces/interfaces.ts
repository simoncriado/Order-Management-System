export interface IItem {
  id: string | number;
  name: string;
  price: number;
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
