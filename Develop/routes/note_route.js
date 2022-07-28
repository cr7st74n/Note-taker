const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname,"../db/db.json");

function getNotes(){
    return fs.promises.readFile(dbPath,"utf8")
    .then(data => JSON.parse(data));
}

router.get("/notes", (req,res)=>{
    getNotes()
    .then(data_note =>{
        res.json(data_note);
    })
    .catch((err)=>console.log(err));
})

router.post("/notes",(req,res)=>{
    getNotes()
    .then((data_note)=>{
        const this_data = req.body;
        const Id_data = data_note.length ? this_data[data_note.length -1].id:0;
    })

})


module.exports = router;