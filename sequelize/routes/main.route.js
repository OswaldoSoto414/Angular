import { userController } from '../models/controllers/user.controller';

export class MainRoutes{
  routes(app){
    app.get('/hello-world', (req, res) => {
      res.send('Hello World');
    });

    app.post('/calculate-tax', userController.CalculatedTax);

    app.post('/create-user', userController.createUser);

    app.put('/edit-user/:id', userController.editUser);

    app.delete('/delete-user/:id', userController.deleteUser);
  }
}
