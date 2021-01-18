const {Router} = require('express');

const router = Router();
const usercontroller = require('../controllers/users.controllers');

router.route('/user')
    .get(usercontroller.getUser)
    .post(usercontroller.addUser);
 
router.route('/userLogin')
    .get(usercontroller.userLogin);
    
module.exports = router;    
