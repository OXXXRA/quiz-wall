const userApp = (app:any) =>  {
  const userController = require('../controllers/user');
  const router = require('express').Router();

  router.post('/', userController.create);
  router.get('/', userController.getAll);
  app.use('/users', router);
};

module.exports = userApp;