const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()


const port = 8080

// To set the viw engine
 
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'./Pages'))   // To change tne name from 'views' to pages or anythingelse

hbs.registerPartials(path.join(__dirname,'./Pages/partials'))  // to use partials or component feature like react

app.use(express.static(path.join(__dirname, './Public')));  // to retrieve css  file


app.get('/',( req,res) =>{
    
    res.render('index')// no need to add '.hbs'
})
app.get('/packages',( req,res) =>{
    
    res.render('packages')// no need to add '.hbs'
})


app.get('/about', (req,res) =>{
    res.render('about')
})

app.get('/contact', (req,res) =>{
    res.render('contactForm')
})

app.get('*', (req, res)=>{
    res.render('404')
})


app.listen(port, ()=>{
    console.log(`listening the port at  ${port}`)
})