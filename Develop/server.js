const express = require("express");
const note_router = require("./routes/note_route");
const server = express();
const PORT = process.env.PORT || 3330;
const path = require("path");

//const 

//Share Static/Browser Files
server.use(express.static(path.join(__dirname,"public")));
// Attach client 

server.use(express.urlencoded({extended: true}))
server.use(express.json());
//Load Routers
server.use("/api",note_router);


server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
