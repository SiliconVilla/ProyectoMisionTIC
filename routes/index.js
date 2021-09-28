const { Router} = require('express');
const router = Router();

//Variante para el router, declarando previamente express como const
//const router = express.Router();

router.get('/', (req, res) => {
    res.render('productos/listado');
})

module.exports = router;