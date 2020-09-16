const {Router} = require('express');

const router = Router();

router.get('/',(req,res)=>res.json({'text':'Satel importadores'}))


module.exports = router;