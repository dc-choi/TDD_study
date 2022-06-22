const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(this);
  const fuc = () => {
    console.log(this);
  };
  fuc();
  const data =  { data: 'respond with a resource' };
  res.send(data);
});

module.exports = router;
