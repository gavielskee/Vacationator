const router = require('express').Router();
const { where } = require('sequelize');
const { User, Request } = require('../models');
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

  // router.get("/dashboard", withAuth, async (req, res) => {
  //   // Store the bookData in a variable once the promise is resolved.
  //   const blogPosts = await Posts.findAll({
  //     include: [{ model: Users }],
  //     order: [["createdAt", "DESC"]],
  //     where: {
  //       user_id: req.session.user_id,
  //     },
  //   });


  //route to home
   router.get("/", async (req, res) => {

    try{
      const userRequest = await Request.findAll({
        include: [{ model: User }],
        where: {user_id: 7},
      });

      console.log(userRequest)
      const usrReq = userRequest.map(post => post.get({ plain: true }))
      console.log(usrReq)
      res.render('home', {usrReq,logged_in: req.session.logged_in});

    }catch (err) {
      res.status(500).json(err);
      console.log
    }
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