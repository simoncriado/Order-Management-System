import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { updateOrderStateMutation } from "../../queries/mutationQueries";
import { getOrderQuery, getOrdersQuery } from "../../queries/getQueries";
import { IEditOrder } from "../../interfaces/interfaces";

const UpdateOrderState = (props: any): JSX.Element => {
  const { loading, data } = useQuery(getOrderQuery, {
    variables: { id: props.orderId.orderId },
  });

  // Send button is disabled if the selected state is the same as the one that the order already has in the DB
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  const [editedOrder, setEditedOrder] = useState<IEditOrder | any>({
    id: "",
    state: "",
  });

  const [updateOrderState] = useMutation(updateOrderStateMutation, {
    variables: {
      id: editedOrder.id,
      state: editedOrder.state,
    },
    refetchQueries: [getOrdersQuery, getOrderQuery],
  });

  const handleInput = (event: any): void => {
    const { name, value } = event.target;
    if (value !== data.getOrder.state) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    setEditedOrder({
      id: props.orderId.orderId,
      [name]: value,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    updateOrderState();
  };

  return (
    <>
      {!props.orderId.orderId ? (
        <form>
          <h3>Please select the order you want to update!</h3>
        </form>
      ) : loading ? (
        <div>Loading</div>
      ) : (
        <form
          id="create-order"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="field">
            <h3>Editing state for order # {data.getOrder.id}:</h3>
            <input
              type="radio"
              id="OPEN"
              value="OPEN"
              name="state"
              onClick={handleInput}
              defaultChecked={data.getOrder.state === "OPEN"}
            />
            <label htmlFor="OPEN">OPEN</label>
            <input
              type="radio"
              id="IN_PROGRESS"
              value="IN_PROGRESS"
              name="state"
              onClick={handleInput}
              defaultChecked={data.getOrder.state === "IN_PROGRESS"}
            />
            <label htmlFor="IN_PROGRESS">IN_PROGRESS</label>
            <input
              type="radio"
              id="COMPLETE"
              value="COMPLETE"
              name="state"
              onClick={handleInput}
              defaultChecked={data.getOrder.state === "COMPLETE"}
            />
            <label htmlFor="COMPLETE">COMPLETE</label>
          </div>
          <button
            className={disabledButton ? "disabledBtn" : ""}
            disabled={disabledButton ? true : false}
            type="submit"
          >
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default UpdateOrderState;
