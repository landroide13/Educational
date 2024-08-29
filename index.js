const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
require('./db');

const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');
const usersRoutes = require('./routes/user');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(cors())
app.use(express.json());

//Api Routes
app.use("/api/auth", authRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/students", studentRoutes); 
app.use("/api/subjects", subjectRoutes);

// Routes
//app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, ()=> {
    console.log('App running at 3000');
});





