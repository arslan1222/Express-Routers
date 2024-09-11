const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRouter");

app.use('/users', userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res)=>{
    res.send("I am root!");
});

app.listen(8888, ()=>{
    console.log("Server is running");
});