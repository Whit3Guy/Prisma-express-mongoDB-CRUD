const express = require('express')
const cors = require('cors')
const app = express()
const porta = 3301

app.use(
    express.urlencoded({extended:true})
)
app.use(
    express.json()
)

app.get("/", (req, res)=>{
    res.status(200).json({msg : "get funfando"})
})

app.listen(porta, (err)=>{
    console.log(err||"api subiu")
})
