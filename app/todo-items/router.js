const router = require('express').Router();
const todoController = require('./controller');

router.post('/todo-items', todoController.store);
router.get('/todo-items/:id', todoController.view);
router.get('/todo-items', todoController.index);
router.put('/todo-items/:id', todoController.update);
router.patch('/todo-items/:id', todoController.update);
router.delete('/todo-items/:id', todoController.destruct);

module.exports = router;