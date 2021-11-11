const { Router } = require('express');
const { usuariosGet,
    usuariosPut,
    usuariosPut404,
    usuariosPatch,
    usuariosPost,
    usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.put('/', usuariosPut404);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

module.exports = router;