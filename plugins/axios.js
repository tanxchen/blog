import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  options.baseURL = `http://127.0.0.1:3333`
}

export default axios.create(options)
