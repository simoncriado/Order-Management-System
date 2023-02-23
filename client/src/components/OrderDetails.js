import { useQuery } from "@apollo/client";
import { getOrderQuery } from "../queries/queries";

const OrderDetails = (props) => {
  //   const data = props.data;
  const { loading, data } = useQuery(getOrderQuery, {
    variables: { id: props.orderId },
  });

  return (
    <>
      {loading ? (
        <div>Loading the orders...</div>
      ) : props.orderId ? (
        <pre id="order-details">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p id="order-details">Please select an order to see the details</p>
      )}
    </>
  );
};

export default OrderDetails;
