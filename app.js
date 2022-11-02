
const express = require('express');

const app = express();

app.use(express.static("public"));
app.get("/index.ejs", (req,res) => {
    res.render("index.ejs")
})
app.get("/page2.ejs", (req,res) => {
    res.render("page2.ejs")
})
app.get("/page3.ejs", (req,res) => {
    res.render("page3.ejs")
})
app.get("/page4.ejs", (req,res) => {
    res.render("page4.ejs")
})
app.get("/page6.ejs", (req,res) => {
    res.render("page6.ejs")
})
app.get("/page7.ejs", (req,res) => {
    res.render("page7.ejs")
})
app.get("/page8.ejs", (req,res) => {
    res.render("page8.ejs")
})
app.get("/page9.ejs", (req,res) => {
    res.render("page9.ejs")
})
app.get("/page10.ejs", (req,res) => {
    res.render("page10.ejs")
})
app.get("/page11.ejs", (req,res) => {
    res.render("page11.ejs")
})
app.get("/page5.ejs", (req,res) => {
    res.render("page5.ejs")
})
app.listen(8080);