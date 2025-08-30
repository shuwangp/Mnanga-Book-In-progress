const express = require('express')

console.log(process.env.MONGODB_KEY);
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello !')
})
app.post('/Post',(req,res)=>{
    res.send('Post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
