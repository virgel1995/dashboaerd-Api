require("dotenv").config()
require("./strategies/discord")
require("./utils/database");
const express = require("express")
const passport = require("passport")
const app = express()
const PORT = process.env.PORT || 3003
const path = require('path');
const routes = require("./routes")
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql")
const RootSchema = require("./graphql")
const bodyParser = require("body-parser")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors())
app.use(cors({
  origin: "https://dashborad-client.vercel.app",
  // preflightContinue: false,
  // optionsSuccessStatus: 204,
  credentials: true
}))
// app.use(cors( {
//   origin: "https://dashborad-client.vercel.app" ,
//   credentials: true
//   }))

/**
 *   preflightContinue: false,
// optionsSuccessStatus: 204,
 */
// app.use(cors({
//    origin: [process.env.Domain],
//     credentials: true
//     }))
// { origin: [process.env.Domain], credentials: true})


// const __dirnamee = path.resolve();
// app.use(express.static(path.join(__dirnamee, '/build')));
// app.get('/*', (req, res) => {
//     let url = path.join(__dirname, '../build', 'index.html');
// })
 






app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 6000 * 60 * 24 },
  store: MongoStore.create({
    mongoUrl: process.env.mongo_URL,
    autoRemove: 'interval',
    autoRemoveInterval: 60 * 24 // 24 hours = 1 day
  })
}))
app.use(passport.initialize())
app.use(passport.session())


app.use("/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: RootSchema
  })
)

/*
app.get('/graphql', cors(), (req, res, next) => {
  const data = res.json() 
  console.log(data)
  return data ? data : res.status(401).send({msg : 'no data from graphql sorry'})
})
*/
app.use("/api", routes)
// app.options('*', cors())
app.use(express.static(path.join(__dirname, 'build')));
// app.get('/menu', function (req, res) {
//  return res.send('/menu');
// });
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => console.log("Runing on Port " + PORT))