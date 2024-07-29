const bodyParser = require('body-parser');
const register=require('../services/register');
const {Router} = require('express');
const router=Router();
router.use('/').post('/register',register)
// router.post('',(req,res)=>(req,res));

// export default router
module.exports={
    register:router
}