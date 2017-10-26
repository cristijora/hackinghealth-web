import feathers from 'feathers/client'
import authentication from 'feathers-authentication-client'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest/client'
import axios from 'axios'
const apiUrl = process.env.API
console.log(process.env.API)
const restClient = rest(apiUrl)
const app = feathers().configure(restClient.axios(axios))
app.configure(hooks())
app.configure(authentication({ storage: window.localStorage }))
export default app
