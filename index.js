const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Servidor NodeJS Iniciado en el puerto --> ', app.get('port'));
});
