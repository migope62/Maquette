const express = require("express");
const app = express();

app.use(express.static("public"));

app.get ('/accueil', (req,res) => {
   res.render("index.ejs")
});

app.get ('/page2', (req,res) => {
    res.render("page2.ejs")
 });

 app.get ('/page3', (req,res) => {
    res.render("page3.ejs")
 });

 app.get ('/page4', (req,res) => {
    res.render("page4.ejs")
 });

 app.get ('/page5', (req,res) => {
    res.render("page5.ejs")
 });

 app.get ('/page6', (req,res) => {
    res.render("/page6.ejs")
 });

 app.get ('/page7', (req,res) => {
    res.render("page7.ejs")
 });

 app.get ('/page8', (req,res) => {
    res.render("page8.ejs")
 });

 app.get ('/page9', (req,res) => {
    res.render("page9.ejs")
 });

 app.get ('/page10', (req,res) => {
    res.render("page10.ejs")
 });

 app.get ('/page11', (req,res) => {
    res.render("page11.ejs")
 });



 app.listen(8080);











