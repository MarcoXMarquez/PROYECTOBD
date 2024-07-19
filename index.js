import app from './app.js';
import express from "express";

app.set('views', 'src\\views\\');
app.set('view engine', 'ejs');


const port=3000;
app.listen(port,()=>{
    console.log("servidor iniciado");
});
