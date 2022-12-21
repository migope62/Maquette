const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/pas', { useNewUrlParser: true });


const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    message: String

})
const forms_schema = mongoose.Schema(
    {

        name: { type: String, required: true },
        mail: { type: String, required: true }


    }
);
const pas = mongoose.model('form', forms_schema);
app.get('/pas', (req, res) => {
    forms.find({}, (err, pasa) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(pasa);
        }
    })
});
app.post('/pas', (req, res) => {  /*Recevoir*/

    const Object = new pas({

        name: req.body.user_name,
        mail: req.body.user_mail


    });
    Object.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('connecté');
        }
    });
});

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

app.listen(3001, (req, res) => {
    console.log("Serveur lancé sur le port 3001...")
});