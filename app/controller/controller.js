const express = require ('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send("home", {});
});

router.get('/home', function(req,res){
    res.redirect("home", {});
});

router.get('/saved', function(req,res){
    res.render("saved", {});
});

module.exports = router;
