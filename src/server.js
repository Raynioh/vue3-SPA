import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(path.dirname(), 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(), 'dist', 'index.html'))
})

app.listen(4000, '193.198.53.212', () => {
  console.log('Listening...')
})
