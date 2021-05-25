const express = require('express')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRouts = require('./routers/blogs')


app.set('view engine','ejs');
// app.set('views','templates');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port)

const db = 'mongodb+srv://ayush:5279@blogpost.uujvb.mongodb.net/blogPostdb?retryWrites=true&w=majority'
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then((result) => console.log("Connected to database") )
    .catch((err) => console.log(err))



app.use(express.static('publics'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))




app.get('/',(req,res)=>{
    res.render('home', {title: 'Home'});
})

//blog Routers
app.use('/blogs',blogRouts);

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'});
})



app.use((req,res)=>{
    // res.status(404).sendFile('./templates/error.html', { root:__dirname });
    res.render('error');
})