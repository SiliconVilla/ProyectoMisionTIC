const { Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../nodefb-32e8e-firebase-adminsdk-7kv25-511e2477e8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://nodefb-32e8e-default-rtdb.firebaseio.com/'
});

const db = admin.database();


//Variante para el router, declarando previamente express como const
//const router = express.Router();

//Listar los productos de la base de datos
router.get('/', (req, res) => {
    db.ref('productos').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('productos/listado', { productos: data });
        console.log(data);
    });
    
})

module.exports = router;
