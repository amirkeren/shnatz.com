import express, { static } from 'express'

const app = express()
app.use(static('public'))
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
