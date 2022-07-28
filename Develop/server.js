const express = require("express");

const server = express();
const PORT = process.env.PORT || 3344;
const path = require("path");

//const 

//Share Static/Browser Files
server.use(express.static(path.join(__dirname,"browser")));
// Attach client 

server.use(express.urlencoded({extended: true}))
server.use(express.json());
//Load Routers
server.use("/note",)

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
