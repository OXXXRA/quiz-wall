const userApp = (app:any) =>  {
  const userController = require('../controllers/user');
  const router = require('express').Router();

  router.post('/', userController.create);
  router.get('/', userController.getAll);
  router.get('/:id', userController.get)
  router.put('/:id', userController.putUser)
  router.delete('/:id', userController.deleteUser)
  app.use('/users', router);
};

module.exports = userApp;