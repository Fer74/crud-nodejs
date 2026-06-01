import express from 'express';

const app = express();  
app.get("/", (req, res) => {
    res.send("Hola mundo !!!!")
});

const products = [
    {id: 1, name: "Producto 1", price: 100},
    {id: 2, name: "Producto 2", price: 200},
    {id: 3, name: "Producto 3", price: 300},
];

app.use ((req, res, next) => {
    console.log(req.method, req.url);
    next();  //me deja seguir con la siguiente ruta
})

app.get ("/products", (req, res) => {
    res.send(products);
});

app.get ("/products/:id", (req, res) => {
    res.send(`pruducto ${req.params.id}`);
});

app.use ((req, res , next) => {
    res.send("no encontrado");
});
app.listen(3000, () => console.log("http://localhost:3000"));