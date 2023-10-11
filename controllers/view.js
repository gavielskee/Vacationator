const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    res.render('admin')
  });

  router.get('/login', async (req, res) => {
    res.render('login')
  });

  router.get('/request', async (req, res) => {
    res.render('requests')
  });

  module.exports = router;