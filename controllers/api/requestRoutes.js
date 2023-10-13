const router = require('express').Router();
const { Request } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all drivers
router.get('/', withAuth, async (req, res) => {
  try {
    const reqData = await Request.findAll({
  
    });
    res.status(200).json(reqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const newRequest = await Request.create({
      ...req.body,isApproved: false,user_id: 1,
    });
    console.log(newRequest);
    res.status(200).json(newRequest);
  } catch (err) {
  
    res.status(500).json(err);
  }
});







module.exports = router;