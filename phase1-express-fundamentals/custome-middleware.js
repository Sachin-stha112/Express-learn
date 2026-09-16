import express from 'express'
const PORT = 5000
const app = express()

const fistMiddleware = (req,res,next) => {
    console.log("Hello from first middleware")
    next()
}
const secondMiddleware = (req,res,next) => {
    console.log("Hello from second Middleware")
    next()
}
//registers middleware
app.use(fistMiddleware) // no path
app.use('/users',secondMiddleware) // with path

app.get('/', (req,res) => {
    console.log('Welcome to Home page')
    res.send('Hello')
})
app.get('/users', (req,res)=>{
    console.log('Hello from user page')
})

app.listen(PORT, ()=>{
    console.log(`Listening at PORT: ${PORT}`);
})