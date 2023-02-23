import { gql } from "@apollo/client";

const getOrdersQuery = gql`
  {
    orders {
      id
      state
    }
  }
`;

const getOrderQuery = gql`
  query ($id: ID) {
    order(id: $id) {
      id
      state
      employee {
        id
        name
      }
    }
  }
`;

export { getOrdersQuery, getOrderQuery };
