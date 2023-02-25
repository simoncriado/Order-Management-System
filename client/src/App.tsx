import OrderList from "./components/OrderList";

// Apollo setup
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const { REACT_APP_APOLLO_CLIENT_URI } = process.env;
console.log(REACT_APP_APOLLO_CLIENT_URI);

const client = new ApolloClient({
  uri: REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="App">
        <h1>List of orders</h1>
        <OrderList />
      </div>
    </ApolloProvider>
  );
}

export default App;
