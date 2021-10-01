const express = require('express');
const router = express.Router();

const LivroController = require('./controllers/LivroController');
const EditoraController = require('./controllers/EditoraController');

router.get('/livros', LivroController.showAll);
router.get('/livros/:id', LivroController.showOne);
router.post('/livros', LivroController.insert);
router.put('/livros/:id', LivroController.update);
router.delete('/livros/:id', LivroController.delete);

router.get('/editora', EditoraController.showAllEditora);
router.get('/editora/:id', EditoraController.showOneEditora);
router.post('/editora', EditoraController.insertEditora);
router.put('/editora/:id', EditoraController.updateEditora);
router.delete('/editora/:id', EditoraController.deleteEditora);


module.exports = router;