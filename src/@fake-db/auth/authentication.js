import mock from "../mock"
import jwt from "jsonwebtoken"

let users = [{
    id: 1,
    email: "user@simplyfema.com",
    password: "simplyfemauser",
    name: "User"
  },
  {
    id: 2,
    email: "admin@simplyfema.com",
    password: "simplyfemaadmin",
    name: "Admin"
  },
  {
    firstName: "Simply",
    lastName: "Fema",
    email: "user1@simplyfema.com",
    phoneNumber: "9988776655",
    companyName: "SimplyFema",
  }

]

const jwtConfig = {
  "secret": "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  "expireTime": 8000
}

// POST: Check User Login Details and return user
mock.onPost("/api/authenticate/login/user").reply(request => {
debugger;
  let {
    email,
    phoneNumber
  } = JSON.parse(request.data)
  let error = "Something went wrong"

  const user = users.find(user => user.email === email && user.phoneNumber === phoneNumber)

  if (user) {

    try {
      let sessionId = ''
      let sendOTPAPIURL = "http://2factor.in/API/V1/230f59ed-0b38-11e8-a895-0200cd936042/SMS/" + `${user.phoneNumber}` + "/AUTOGEN/SMLOGIN";
      mock.get(sendOTPAPIURL, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        if (response.data) {
          let status = response.data.Status
          if (status === "Success") {
            sessionId = response.data.Details;
          }
        }
      }).catch(error => {
        console.log(error);
      });

      const accessToken = jwt.sign({
        id: user.id
      }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      })

      const userData = Object.assign({}, user, {
        loggedInWith: "jwt"
      })

      // delete userData.phoneNumber

      const response = {
        user: userData,
        accessToken: accessToken
      }

      return [200, response]

    } catch (e) {
      error = e
    }
  } else {
    error = "Email Or Phone Number Invalid"
  }

  return [200, {
    error
  }]
})

mock.onPost("/api/authenticate/register/user").reply(request => {
  if (request.data.length > 0) {

    let {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName
    } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find((user) => user.email === email)
    const isPhoneNumberAlreadyInUse = users.find((user) => user.phoneNumber === phoneNumber)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      phoneNumber: isPhoneNumberAlreadyInUse ? 'This Phone Number is already in use.' : null,
      firstName: firstName === '' ? 'Please enter your first name.' : null,
      lastName: lastName === '' ? 'Please enter your last name.' : null
    }

    

    if (!error.phoneNumber && !error.email) {

      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        companyName: companyName,
      }

      // Add user id
      const length = users.length
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }
      userData.id = lastIndex + 1

      users.push(userData)

      const accessToken = jwt.sign({
        id: userData.id
      }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      })

      let user = Object.assign({}, userData)
      // delete user['phoneNumber']
      const response = {
        user: user,
        accessToken: accessToken
      }

      return [200, response]
    } else {
      return [200, {
        error
      }]
    }

  }

})

mock.onPost('/api/authenticate/refresh-token').reply((request) => {

  const {
    accessToken
  } = JSON.parse(request.data)

  try {
    const {
      id
    } = jwt.verify(accessToken, jwtConfig.secret)

    let userData = Object.assign({}, users.find(user => user.id === id))

    const newAccessToken = jwt.sign({
      id: userData.id
    }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn
    })

    // delete userData['phoneNumber']
    const response = {
      userData: userData,
      accessToken: newAccessToken
    }

    return [200, response]
  } catch (e) {
    const error = "Invalid access token"
    return [401, {
      error
    }]
  }
})
