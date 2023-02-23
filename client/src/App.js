// Components
import OrderList from "./components/OrderList";

// Apollo setup
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of orders</h1>
        <OrderList />
      </div>
    </ApolloProvider>
  );
}

export default App;
