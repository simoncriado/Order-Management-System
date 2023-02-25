import { useState } from "react";
import CreateOrder from "./CreateOrder";
import UpdateOrderState from "./UpdateOrderState";

const MutationForm = (orderId: any): JSX.Element => {
  // State to know which form to display: create or edit
  const [currentForm, setCurrentForm] = useState<string>("create");

  return (
    <div className="mutationForm">
      <div className="mutationFormTitles">
        <div
          className={currentForm === "create" ? "activeForm" : ""}
          onClick={() => {
            setCurrentForm("create");
          }}
        >
          Create new order
        </div>
        <div
          className={currentForm === "edit" ? "activeForm" : ""}
          onClick={() => {
            setCurrentForm("edit");
          }}
        >
          Edit order state
        </div>
      </div>
      {currentForm === "create" ? (
        <CreateOrder />
      ) : (
        <UpdateOrderState orderId={orderId} />
      )}
    </div>
  );
};

export default MutationForm;
