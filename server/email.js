const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'camylle.will54@ethereal.email',
    pass: 'BzxgNxBQdgAVZn2jz1'
  }
})

const createMail = async (user) => {
  const mailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Child Gift</title>
      </head>
      <body>
          <p>Child name : ${user.info.username}</p>
          <hr>
          <p>Child address : ${user.info.address}</p>
          <hr>
          <p>Child request : ${user.gift}</p>
          <hr>
      </body>
      </html>
    `

  const mailOptions = {
    from: 'do_not_reply@northpole.com',
    to: 'santa@northpole.com',
    subject: 'Gift request',
    html: mailTemplate
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      throw error
    } else {
      console.log('Email sent:' + info.response)
    }
  })
}

module.exports = createMail
