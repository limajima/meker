const session = require('express-session')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')

app.use(session({
  secret: 'its a secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})