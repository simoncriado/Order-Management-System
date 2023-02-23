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
      customer {
        id
        name
      }
      employee {
        id
        name
      }
      items {
        id
        name
        price
      }
      creation
      lastUpdate
    }
  }
`;

export { getOrdersQuery, getOrderQuery };
