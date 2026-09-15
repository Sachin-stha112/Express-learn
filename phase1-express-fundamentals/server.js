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
//more of http methods like post ,put, delete, patch 
app.post("/users", (req, res) => {
  res.send("Create user");
});

app.put("/users/123", (req, res) => {
  res.send("Replace user 123");
});

app.patch("/users/123", (req, res) => {
  res.send("Update part of user 123");
});

app.delete("/users/123", (req, res) => {
  res.send("Delete user 123");
});
app.listen(3000, () => {
    console.log('Server running at PORT: 3000')
})