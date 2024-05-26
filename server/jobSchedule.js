const schedule = require('node-schedule')
const createMail = require('./email')

let pendingRequest = []

const startScheduleJob = () => {
  schedule.scheduleJob('*/15 * * * * * ', function () {
    // send mail in list for every 15 second
    while (pendingRequest.length > 0) {
      const user = pendingRequest.shift()
      createMail(user).catch(console.error)
    }
  })
}

module.exports = {
  startScheduleJob,
  pendingRequest
}
