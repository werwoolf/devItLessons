import Router from '@koa/router'
import {authMiddleware} from "./middlewares/authMiddleware.mjs";
import {getCardController, passController, startGameController} from "./controllers/gameControllers.mjs";


export const router = new Router();


router.post('/start', authMiddleware, startGameController);

router.get('/getcard', authMiddleware, getCardController);

router.get('/pass', authMiddleware, passController);
