import { DocumentNode, gql } from "@apollo/client";

const createOrderMutation: DocumentNode = gql`
  mutation ($input: OrderInput) {
    createOrder(input: $input) {
      id
      state
    }
  }
`;

const updateOrderStateMutation: DocumentNode = gql`
  mutation ($id: ID!, $state: String!) {
    updateOrderState(id: $id, state: $state) {
      id
      state
    }
  }
`;

export { createOrderMutation, updateOrderStateMutation };
