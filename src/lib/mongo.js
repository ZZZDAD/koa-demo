import mongoose from 'mongoose'

const DB_NAME = 'dbname'
const DB_PORT = 27017
const DB_URL = `mongodb://localhost:${DB_PORT}/${DB_NAME}`

const options = {
  autoIndex: false,
  useNewUrlParser: true
}

mongoose.connect(DB_URL, options, error => {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve()
    } else {
      reject(error)
    }
  })
})

export default mongoose