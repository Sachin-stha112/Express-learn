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

app.use(fistMiddleware)
app.use(secondMiddleware)

app.get('/', (req,res) => {
    console.log('Welcome to Home page')
    res.send('Hello')
})

app.listen(PORT, ()=>{
    console.log(`Listening at PORT: ${PORT}`);
})