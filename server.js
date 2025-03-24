let express = require("express");

var session = require('express-session')

let bodyParser = require("body-parser");

let app = express();

// Moteur de template
app.set("view engine", "ejs");

// Middleware
app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'skibidi',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

// Routes
app.get("/", (request, response) => {
    if(request.session.error) {
        response.locals.error = request.session.error
        request.session.error = undefined
        
    };
});

app.post("/", (request, response) => {
   
    if (request.body.message === undefined || request.body.message === "") {

        request.session.error = "Il y a une erreur"

        response.redirect("/")
    }

});

// Lancer le serveur
app.listen(8080, () => console.log("Serveur démarré sur le port 8080"));