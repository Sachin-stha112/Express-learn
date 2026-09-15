import express from 'express'
const app = express()
//define a get route for home page
app.get('/', (req,res)=> {
    res.send("Hello from express")
}
)

app.listen(3000, () => {
    console.log('Server running at PORT: 3000')
})