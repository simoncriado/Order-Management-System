import { DocumentNode, gql } from "@apollo/client";

const getOrdersQuery: DocumentNode = gql`
  {
    getOrders {
      id
      state
    }
  }
`;

const getOrderQuery: DocumentNode = gql`
  query ($id: ID!) {
    getOrder(id: $id) {
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
