const express = require("express");
const cors = require("cors")
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/Users.route");
const { orderRouter } = require("./Routes/Orders.route");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors("*"))
app.use("/users", userRouter)
app.use("/orders", orderRouter)


app.get("/", (req, res) => {
    try {
        res.json({ Message: "Welcome to PowerVolt App" });
    } catch (err) {
        console.log(err);
        res.json({ Error: err.message })
    }
});
app.listen(process.env.PORT, async () => {
    try {
        await connection.sync();
        console.log("Connected to MySQL DB");
    } catch (err) {
        console.log("Error connecting to DB");
    }
    console.log(`Server is Rocking on port ${process.env.PORT}`);
});
