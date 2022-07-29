const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const {v4:uuid} =require("uuid");
const dbPath = path.join(__dirname,'../db/db.json');

function getNotes(){
    return fs.promises.readFile(dbPath,"utf8")
    .then(data => JSON.parse(data));
}

//Get our dataBase notes 
router.get("/notes", (req,res)=>{
    getNotes()
    .then(data_note =>{
        res.json(data_note);
        console.log("data recived");
    })
    .catch((err)=>console.log(err));
})

router.post("/notes",(req,res)=>{
    getNotes()
    .then(data_note =>{
        const this_data = req.body;

        this_data.id = uuid().slice(0,4);
        data_note.push(this_data);

        fs.promises.writeFile(dbPath, JSON.stringify(data_note,null,2))
        .then(()=>{
            console.log('too bien');
            res.json(this_data);
        }).catch(err => console.log(err));

    })
});

router.delete("/notes/:id",(req,res)=>{
    getNotes()
    .then(note_del =>{

        let id = req.params.id;
    
        // filtering out object from array
        let NewNoteData = note_del.filter(currItem => currItem.id != id);

        fs.promises.writeFile(dbPath, JSON.stringify(NewNoteData,null,2))
        .then(()=>{
            console.log('deleted succeddfully');
            res.json(NewNoteData);

        })
        .catch(err => console.log(err));
    })
});


module.exports = router;