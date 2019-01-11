const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/process', function(req, res, next) {
    let response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

module.exports = router;
