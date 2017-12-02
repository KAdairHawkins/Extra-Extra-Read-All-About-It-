const express = require ('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send("What's up?");
});

router.get('/home', function(req,res){
    res.redirect("home");
});

router.get('/saved', function(req,res){
    res.render("saved", {});
});

module.exports = router;
