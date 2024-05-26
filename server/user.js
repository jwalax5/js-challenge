const axios = require('axios')

let userObjs = []

const fetchUsers = async (next) => {
  //throw new Error(" GG WP ")

  const usersDetailUrls = [
    'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json',
    'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'
  ]

  await Promise.all(usersDetailUrls.map((url) => axios.get(url)))
    .then(
      axios.spread((userProfiles, users) => {
        // merge response into single userObjs array
        userObjs = userProfiles.data.map((up) => ({
          ...up,
          ...users.data.find((u) => up.userUid === u.uid)
        }))
        console.log(userObjs.length)
      })
    )
    .catch((err) => {
      throw err
    })

  return userObjs
}

module.exports = {
  fetchUsers
}
