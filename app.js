import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './router/index.js';
import connect from './schemas/index.js';


dotenv.config();

const app = express()
const port = 3000

connect();  // mongodb 연결

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})