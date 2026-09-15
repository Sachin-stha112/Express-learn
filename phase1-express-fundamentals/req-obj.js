import express from 'express'
const app = express()
const PORT = 5000
// middleware : allows express to read json req body
app.use(express.json())

//req.params
app.get('/products/:id', (req,res)=>{
    console.log("Params: ", req.params)
    console.log("Product ID: ", req.params.id)
})

//req.query
app.get('/products' , (req,res)=>{
    console.log('Query: ', req.query)
    const { category, sort, page } = req.query;
    res.json({
        message : 'Product Filter info',
        category,
        sort,
        page
    })
})

//req.body
app.post('/users', (req,res) => {
    console.log('Body: ', req.body)
    const {name, email, age} = req.body
    res.json({
        message: 'user created successfully',
        name,
        email,
        age
    })
})

//req.header
app.get("/test", (req, res) => {
  console.log(req.headers);

  res.send("Check terminal");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});