const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactMessage', {useNewUrlParser: true})
const port = 8000;

const contactSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    subject: String,
    message: String
  });

const Contact = mongoose.model('Contact', contactSchema);
// EXPRESS SPECIFIC STUFF
app.use(express.static('public')); // For serving static files
app.use(express.urlencoded())  

// PUG SPECIFIC STUFF
var engines = require('consolidate');

app.set('views', __dirname + '');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
// app.set('view engine', 'html') // Set the template engine as pug
// app.set('views', path.join(__dirname, './Project-IV')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).sendFile(__dirname+'/index.html');
})

app.post('/register', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("Item was not saved to the databse")
})})



// START THE SERVER
app.listen((port||process.env.PORT), ()=>{
    console.log(`The application started successfully on port ${port}`);
});
