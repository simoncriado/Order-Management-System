import { useQuery } from "@apollo/client";
import { getOrderQuery } from "../queries/getQueries";

const OrderDetails = (props: string | any): JSX.Element => {
  const { loading, data, error } = useQuery(getOrderQuery, {
    variables: { id: props.orderId },
  });

  return (
    <>
      {loading ? (
        <div>Loading the orders...</div>
      ) : props.orderId ? (
        <pre id="order-details">{JSON.stringify(data || error, null, 2)}</pre>
      ) : (
        <p id="order-details">
          Please select an order to see the raw JSON object!
        </p>
      )}
    </>
  );
};

export default OrderDetails;
