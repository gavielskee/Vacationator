const router = require('express').Router();
const { Request } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const reqData = await Request.findAll({
  
    });
    res.status(200).json(reqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRequest = await Request.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newRequest);
    res.status(200).json(newRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});







module.exports = router;