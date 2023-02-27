import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { createOrderMutation } from "../../queries/mutationQueries";
import { listOfCustomer, listOfEmployees, listOfItems } from "../../data/data";
import { getOrdersQuery } from "../../queries/getQueries";
import {
  ICustomer,
  IEmployee,
  IItem,
  INewOrder,
} from "../../interfaces/interfaces";

const CreateOrder = (): JSX.Element => {
  const [newOrder, setNewOrder] = useState<INewOrder>({
    state: "",
    customerId: "",
    employeeId: "",
    itemsId: [],
  });
  const [createOrder] = useMutation(createOrderMutation, {
    variables: {
      input: newOrder,
    },
    refetchQueries: [getOrdersQuery],
  });

  const [btnText, setBtnText] = useState("Send");

  useEffect(() => {
    if (btnText === "Order created!") {
      setTimeout(() => {
        setBtnText("Send");
      }, 2000);
    }
  }, [btnText]);

  const handleInput = (event: any): void => {
    const { name, value, checked } = event.target;
    let valToUpdate: string | string[];
    if (name === "itemsId") {
      const newVal: string[] = [...newOrder.itemsId];
      if (checked) {
        newVal.push(value);
      } else {
        const index: number = newVal.indexOf(value);
        newVal.splice(index, 1);
      }
      valToUpdate = newVal;
    } else {
      valToUpdate = value;
    }
    setNewOrder((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleSubmit = (): void => {
    setBtnText("Order created!");
    createOrder();
  };

  return (
    <form
      id="create-order"
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <div className="field">
        <h3>* Order state:</h3>
        <input
          required
          type="radio"
          id="OPEN"
          value="OPEN"
          name="state"
          onClick={handleInput}
        />
        <label htmlFor="OPEN">OPEN</label>
        <input
          required
          type="radio"
          id="IN_PROGRESS"
          value="IN_PROGRESS"
          name="state"
          onClick={handleInput}
        />
        <label htmlFor="IN_PROGRESS">IN_PROGRESS</label>
        <input
          required
          type="radio"
          id="COMPLETE"
          value="COMPLETE"
          name="state"
          onClick={handleInput}
        />
        <label htmlFor="COMPLETE">COMPLETE</label>
      </div>
      <div className="field customerEmployee">
        <h3>* Customer:</h3>
        <select name="customerId" onChange={handleInput} required>
          <option value="">Select customer</option>
          {listOfCustomer.map((customer: ICustomer, index: number) => (
            <option key={index} value={customer.id}>
              Customer {customer.id}
            </option>
          ))}
        </select>
      </div>
      <div className="field customerEmployee">
        <h3>Employee:</h3>
        <select name="employeeId" onChange={handleInput}>
          <option>Select employee</option>
          {listOfEmployees.map((employee: IEmployee, index: number) => (
            <option key={index} value={employee.id}>
              Employee {employee.id}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <h3>* Select items:</h3>
        {listOfItems.map((item: IItem, index: number) => (
          <div key={index}>
            <input
              type="checkbox"
              name="itemsId"
              id={item.id}
              value={item.id}
              onClick={handleInput}
            />
            <label htmlFor={item.id}>Item {item.id}</label>
          </div>
        ))}
      </div>
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default CreateOrder;
