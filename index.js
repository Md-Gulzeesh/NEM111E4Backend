const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { authRoutes } = require("./routes/auth.routes");
const { todoRoutes } = require("./routes/todo.routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/login",authRoutes);
app.use("/todos",todoRoutes);

app.get("/",(req,res)=>{
    res.send({
      "Routes": "/"
    });
})

app.listen(PORT,async ()=>{
    try {
        await connection;
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error while connecting to db",{error});
    }
    console.log(`Server is running on port ${PORT}`);
})