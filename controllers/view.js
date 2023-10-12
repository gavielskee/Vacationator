const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/admin', async (req, res) => {
//     res.render('admin')
//   });

  router.get('/login', async (req, res) => {
    res.render('login')
  });

  router.get('/request', async (req, res) => {
    res.render('requests')
  });

  //route to new-user page
  router.get('/newuser', async (req, res) => {
    res.render('newuser')
  });

    // GET all users for admin page
router.get('/admin', async (req, res) => {
  try {
    const userData = 
    await User.findAll({
  
    });

    const retUsers = userData.
    map(post => post.get({ plain: true }))
    console.log(retUsers)
    res.render('admin',{retUsers,logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
    console.log
  }
});


  module.exports = router;