///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { PORT, SECRET } = process.env;

///////////////////////////
// Dependencies
//////////////////////////

// Bringing in Express - This is the correct way, don't use import
const express = require("express");
const app = express();

// IMPORT DATABASE CONNECTIONS
const mongoose = require("./db/dbconn");

// OTHER IMPORTS
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const morgan = require("morgan");

///////////////////////////////
// Set View Engine
///////////////////////////////

//set view engine to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

////////////
//MIDDLEWARE
////////////
// SESSIONS, this allows you to use req.session for tracking session data
app.use(
	session({
		secret: SECRET,
		saveUninitialized: false, // don't create session until something stored
		resave: false, //don't save session if unmodified
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //comment if not using forms
app.use(methodOverride("_method"));
app.use(express.json()) 
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////


// ROUTERS
const authRouter = require("./controllers/auth");
// const testRouter = require("./controllers/test");
const collectionRouter = require("./controllers/collection");


// Must have for auth to work
app.use("/auth", authRouter);
// Required for collection routes
app.use("/collection", collectionRouter);


// Leave this at auth/login, otherwise heroku doesn't like it
// This isn't working on local host
app.get("/", (req, res) => {
	// console.log('Hello Cheese')
	res.render('index.jsx', {greeting: 'Welcome to Digital Shelfie. Please login.'})
});

////////////////////////
//APP LISTENER
////////////////////////
app.listen(PORT, () => {
	console.log(`Your are listening on port ${PORT}`);
});
