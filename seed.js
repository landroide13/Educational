const Article = require('./models/article');
const Student = require('./models/student');
const Subject = require('./models/subject');
const Role = require('./models/role');
const User = require('./models/user');

const dbName = 'School01';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${dbName}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))

const subjects = [
    {name: 'Art', description: "Art Shit", tutor: "66cd62580f3ad6de1adb30a4" }, 
    {name: 'Mathematics', description: "Math Shit", tutor: "66cd62580f3ad6de1adb30a4" },
]


const users = [
    {email: 'claude@nz.co', firstName: 'Claude', lastName:'Monet', password:'1234', role:'1'},
    {email: 'eltro@nz.co', firstName: 'Eltro', lastName:'Lazo', password:'1234', role:'2'},
    {email: 'petra@nz.co', firstName: 'Petra', lastName:'Galeche', password:'1234', role:'1'},
    {email: 'jon@nz.co', firstName: 'Jon', lastName:'Salchijon', password:'1234', role:'2'},
]



const roles = [
    {name: 'Admin'},
    {name: 'Tutor'},
]


//a.save().then(data => console.log(data))
//const a = new Author({name: 'Claude Monet', nationality:'French', born: '1840', died:'1926', knownFor:'Painter', notableWork:'Water Lilies'})


//Uncomment thi last lines to generate and populate DB(-> node seed.js)
//////////////////////////////////////////

//Type.insertMany(types).then(res =>  console.log(res))
Subject.insertMany(subjects).then(res =>  console.log(res))
//Author.insertMany(authors).then(res =>  console.log(res))
//Category.insertMany(categories).then(res =>  console.log(res))
