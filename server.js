let express = require("express")
let bodyParser = require('body-parser')

let app = express()


app.set('view engine', 'ejs')

app.use("/assets", express.static('public'))

app.get("/", (request, response) => {
    response.render('pages/index',{test:'Salut'})
})

app.post("/", (request, response) => {
    console.log(request.body)
})

app.listen(8080)