const router = require('express').Router();
const passport = require('passport');


//auth loguin 

router.get('/', (req, res) => {
    res.render('login');
});



//auth google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
//call back redirect goolge
router.use('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send("callback URI");
});

//auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send("logout")
});

module.exports = router;