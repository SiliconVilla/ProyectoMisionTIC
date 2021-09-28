const { Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../nodejs-a846c-firebase-adminsdk-ij0gw-dba4f09f3c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://nodejs-a846c-default-rtdb.firebaseio.com/'
});

const db = admin.database();


//Variante para el router, declarando previamente express como const
//const router = express.Router();

router.get('/', (req, res) => {
    res.render('productos/listado');
})

module.exports = router;