const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
import { schema, root } from "./schema/schema";
const cors = require("cors");

const app = express();

// Allow cross-origin requests
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Now listering for request on port 4000");
});
