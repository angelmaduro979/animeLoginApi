const express=require('express');
const router=express.Router();

//Import controllers:
const controllers=require('../controllers/controllers');

router.get('/register',controllers.register);
router.post('/register',controllers.AddUsers);

router.get('/login',controllers.loginGet);
router.post('/auth',controllers.loginPost);

router.get('/',controllers.getAnimeList);
router.get('/animeDetails/:id', (req, res, next) => {
    console.log(`Received request for anime ID: ${req.params.animeId}`);
    next();
}, controllers.getAnimeDetail)

router.get('/logout',controllers.logout);
module.exports=router;