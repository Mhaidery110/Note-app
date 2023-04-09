const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');


dotenv.config();
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello for now")
})


app.get("/data/notes", (req,res)=>{
    res.json(notes)
})


app.get("/data/notes/:id", (req,res)=>{
    const note = notes.find((n)=> n._id === req.params.id)
    res.send(note)
})





const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})