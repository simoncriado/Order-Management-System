import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getOrdersQuery } from "../queries/queries";

// Components
import OrderDetails from "./OrderDetails";

const OrderList = () => {
  const { loading, data } = useQuery(getOrdersQuery);
  const [orderId, setOrderId] = useState("");

  return (
    <div>
      <ul id="order-list">
        {loading ? (
          <div>Loading the orders...</div>
        ) : (
          data.orders.map((order, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  setOrderId(order.id);
                }}
              >
                Order ID # {order.id}
              </li>
            );
          })
        )}
      </ul>
      <OrderDetails orderId={orderId} />
    </div>
  );
};

export default OrderList;
