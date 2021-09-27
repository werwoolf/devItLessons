import Router from '@koa/router'
import {authMiddleware} from "./middlewares/authMiddleware.mjs";
import {
    getCardController,
    passController,
    startGameController,
    saveGameController,
    findGameController
} from "./controllers/gameControllers.mjs";
import {games} from "./controllers/gameControllers.mjs";

export const router = new Router();

router.post('/start', startGameController);

router.get('/state', authMiddleware, (ctx) => {
    const id = ctx.state.id;
    ctx.body = games[id];
});

router.get('/getcard', authMiddleware, getCardController);

router.get('/pass', authMiddleware, passController);

router.post('/savegame', authMiddleware, saveGameController);

router.get('/findgame', authMiddleware, findGameController);