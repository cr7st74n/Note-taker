const express = require("express");
const note_router = require("./routes/note_route");
const api_route = require("./routes/api_routes");
const server = express();
const PORT = process.env.PORT || 3330;
const path = require("path");

//const 

//Share Static/Browser Files
server.use(express.static(path.join(__dirname,"public")));

//Very import to set this middleware Detect the form data !
// see the data from our Front End 
server.use(express.urlencoded({extended: true}))
server.use(express.json());
//Load Routers

server.use("/api",note_router);
server.use("/notes", api_route);


server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
