const nodemailer = require("nodemailer");
const { Router } = require("express");
const router = Router();

const mail = {
  host: "",
  user: "",
  pass: "",
  recipient: "",
};

const transporter = nodemailer.createTransport({
  host: mail.host,
  port: 465,
  auth: {
    user: mail.user,
    pass: mail.pass,
  },
});

const handleErrors = (err) => {
  let errors = {};

  if (err.message === "Fill in the fields") {
    errors = "Fill in the fields";
  }

  if (err.message === "The email is invalid") {
    errors = "The email is invalid";
  }

  return errors;
};

router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw new Error("Fill in the fields");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      throw new Error("The email is invalid");
    }

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        return;
      }
    });

    transporter
      .sendMail({
        from: mail.user,
        to: mail.recipient,
        subject: `A message received from ${name} (${email})`,
        text: message,
      })
      .catch((err) => {
        throw new Error(err);
      });

    res.status(200).json({ data: "Email sent" });
    next();
  } catch (errors) {
    res.status(400).json({ errors: handleErrors(errors) });
    next();
  }
});

module.exports = router;
