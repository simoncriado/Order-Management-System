import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getOrdersQuery } from "../queries/getQueries";
import OrderDetails from "./OrderDetails";
import MutationForm from "./createAndEdit/MutationForm";
import { IOrder } from "../interfaces/interfaces";

const OrderList = (): JSX.Element => {
  const { loading, data } = useQuery(getOrdersQuery);
  const [orderId, setOrderId] = useState<string | any>("");

  return (
    <div>
      <ul id="order-list">
        {loading ? (
          <div>Loading the orders...</div>
        ) : data.getOrders ? (
          data.getOrders.map((order: IOrder, index: number) => {
            return (
              <li
                className={orderId === order.id ? "active" : undefined}
                key={index}
                onClick={(): void => {
                  setOrderId(order.id);
                }}
              >
                Order ID # {order.id}
              </li>
            );
          })
        ) : (
          <div>No orders in the database...</div>
        )}
      </ul>
      <OrderDetails orderId={orderId} />
      <MutationForm orderId={orderId} />
    </div>
  );
};

export default OrderList;
