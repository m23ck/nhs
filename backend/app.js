require("dotenv").config();
var cors = require('cors')
const express = require("express");
const morgan = require("morgan");
var bodyParser = require('body-parser')

const app = express();
const gebruikerRouter = require("./server/routes/gebruiker.route");
const typeRouter = require("./server/routes/type.model");
const klasRouter = require("./server/routes/klas.route");
const roadmapRouter = require("./server/routes/roadmap.route");
const assignmentRouter = require("./server/routes/assignment.route");
const resultaatRouter = require("./server/routes/resultaat.route");

//Remove when in production
app.use(cors({
    credentials: true,
    origin: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());



app.use("/gebruiker", gebruikerRouter);
app.use("/type", typeRouter);
app.use("/klas", klasRouter);
app.use("/roadmap", roadmapRouter);
app.use("/assignment", assignmentRouter);
app.use("/resultaat", resultaatRouter);



app.listen(process.env.APP_PORT, () => {
    console.log("Server running on port", process.env.APP_PORT);
})


//When route does not exist, show the requester this message
app.get('*', (req, res) => {
    res.json({
        message: "Welkom bij de Backend van N.H.S."
    });
});
