import express from 'express'
const app = express()
//define a get route for home page
app.get('/', (req,res)=> {
    res.send("Hello from express")
})
// get method for /about
app.get('/about', (req, res) => {
    res.send("Hello from about page")
})
app.get('/users', (req, res)=>{
    res.send("Hello from users page")
})
app.get('/products', (req,res)=>{
    res.send('Hello from products page')
})
app.listen(3000, () => {
    console.log('Server running at PORT: 3000')
})