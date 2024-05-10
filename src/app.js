const express = require("express");
const userRoute = require("./routers/user.router.js");
const dbConnection = require("./config/db.connection.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get('/', (req, res)=>{
    res.send(`
      <h1>Welcome to our page, ready to create users on endpoint /api/users</h1>
    `)
})

const PORT = 8080;

dbConnection().then(() => console.log('Connect to MongoDB'));

const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
