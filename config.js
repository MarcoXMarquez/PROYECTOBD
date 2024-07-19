import app from './app.js';
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000);
console.log("servidor iniciado");
