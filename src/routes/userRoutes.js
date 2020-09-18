import { Router } from 'express';
import userController from '../controllers/UserControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria exister
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuários

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;


/*
index -> lista  todos os usuarios -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATH OU PUT
*/
