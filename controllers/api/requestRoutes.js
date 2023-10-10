const router = require('express').Router();
const { Request } = require('../../models');
const withAuth = require('../../utils/auth');


// create new request with userid
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Request.create(
      {
        // what are these 3 dot!
       ...req.body, user_id: req.session.user_id,}
      
    
    );
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;