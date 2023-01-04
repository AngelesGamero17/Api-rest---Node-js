const { Router } = require('express');

const router = new Router();

router.get('/last',(req, res) => {
  const data = {
    "name": "apellido one",
    "name two" : "apellido two"
  };
  res.json(data);
});

module.exports = router;