let express = require("express");
let session = require('express-session');
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
}));

app.use(require('./middleware/flash'));

// Routes
app.get("/", (request, response) => {
    console.log(request.session);
    response.render("pages/index");
});

app.post("/", (request, response) => {
    if (!request.body.message) {
        request.flash('error', "Vous n'avez pas posté de message");
        return response.redirect("/");
    } else {
        
    }
});

// Lancer le serveur
app.listen(8080, () => console.log("Serveur démarré sur le port 8080"));