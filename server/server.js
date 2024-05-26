// server.js
// where your node app starts

// init project
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const moment = require('moment')
const app = express()
const bodyParser = require('body-parser')
const { pendingRequest, startScheduleJob } = require('./jobSchedule')
const { fetchUsers } = require('./user')

app.use(bodyParser())
app.use(morgan())
app.use(cors())
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// start schedule to send email for every 15 second
startScheduleJob()

const giftRequestHandler = async (request, response, next) => {
  try {
    const userObjs = await fetchUsers()

    const data = request.body

    // check if child is registered
    const foundChild = userObjs.find((user) => {
      if (user.username === data.childName) {
        return user
      }
    })
    if (foundChild === undefined) {
      // child is not registered -> return error 404
      return response.status(404).send('Child not found')
    } else {
      // check birthdate
      const age = moment(new Date()).diff(
        moment(foundChild.birthdate, 'YYYY/DD/MM'),
        'years'
      )
      // child is older than 10 -> return error 400
      if (age > 10) {
        return response.status(400).send('Child age is greater than 10')
      }
    }

    // child is good to go, request will append to pending mail list
    pendingRequest.push({ gift: data.gift, info: foundChild })
    response.json({ data })
  } catch (error) {
    // catch error in middleware
    next(error)
  }
}

app.post('/api/gift', giftRequestHandler)

// listen for requests :)
const listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
