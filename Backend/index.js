const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());


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
        // await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB");
    }
    console.log(`Server is Rocking on port ${process.env.PORT}`);
});
