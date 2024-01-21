const { Router } = require("express");
const router = Router();
const projects = require("../projects.json");

router.get("/api/v1/projects", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(projects, null, 2));
});

module.exports = router;
