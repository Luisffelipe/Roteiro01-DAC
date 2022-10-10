const express = require('express');
const handlebars = require('express-handlebars')

const app = express();

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/dockerfile',(req, res)=>{
    res.render('dockerfileinfo');
})

app.listen(8080,()=>{
    console.log('Servidor rodando na porta 8080...');
})