const router = require("express").Router();
const { Request } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all drivers
router.get("/", withAuth, async (req, res) => {
  try {
    const reqData = await Request.findAll({});

    res.status(200).json(reqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newRequest = await Request.create({
      ...req.body,
      isApproved: false,
      user_id: 1,
    });
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const newReqAlert = {
      to: `${req.session.email}`,
      from: "spworrell@gmail.com",
      subject: `Request #${newRequest.dataValues.id} has been received`,
      text: `Request #${newRequest.dataValues.id} has been received.  Someone will respond to your request soon.`,
    };
    sendMail.send(newReqAlert);
    console.log(newRequest.dataValues.id);
    res.status(200).json(newRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    await Request.update(
      {
        isApproved: req.body.is_Approved,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    
    );
  

res.status(200)


  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
