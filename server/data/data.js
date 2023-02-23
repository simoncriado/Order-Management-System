const orders = [
  { id: "1", state: "OPEN", customer: "customer1", employeeId: "1" },
  {
    id: "2",
    state: "IN_PROGRESS",
    customer: "customer2",
    employeeId: "",
  },
  { id: "3", state: "COMPLETE", customer: "customer3", employeeId: "3" },
];

const employees = [
  { id: "1", name: "employee1" },
  { id: "2", name: "employee2" },
  { id: "3", name: "employee3" },
];

module.exports = { orders, employees };
