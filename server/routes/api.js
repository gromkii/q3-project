const express = require('express'),
  router = express.Router();

/*
Returns a list of all users.
 */

router.route('/users')
  .get((req, res) => {
    res.json({
      username:'Dax',
      password:'a pass',
      avatar_url:'http://placecage.com/200/200',
      location:'Austin,TX'
    });
  })

module.exports = router;
